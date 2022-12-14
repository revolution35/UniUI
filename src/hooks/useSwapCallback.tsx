// eslint-disable-next-line no-restricted-imports
import { TransactionResponse } from '@ethersproject/abstract-provider'
import { Trade } from '@uniswap/router-sdk'
import { Currency, Percent, TradeType } from '@uniswap/sdk-core'
import { SupportedChainId } from '@uniswap/widgets'
import { useWeb3React } from '@web3-react/core'
import { SwapCallbackState, useSwapCallback as useLibSwapCallBack } from 'lib/hooks/swap/useSwapCallback'
import tryParseCurrencyAmount from 'lib/utils/tryParseCurrencyAmount'
import { ReactNode, useMemo } from 'react'
import { calculateGasMargin } from 'utils/calculateGasMargin'

import { useTransactionAdder } from '../state/transactions/hooks'
import { TransactionType } from '../state/transactions/types'
import { currencyId } from '../utils/currencyId'
import { useDonateContract } from './useContract'
import useENS from './useENS'
import { SignatureData } from './useERC20Permit'
import useTransactionDeadline from './useTransactionDeadline'

// returns a function that will execute a swap, if the parameters are all valid
// and the user has approved the slippage adjusted input amount for the trade
export function useSwapCallback(
  trade: Trade<Currency, Currency, TradeType> | undefined, // trade to execute, required
  allowedSlippage: Percent, // in bips
  recipientAddressOrName: string | null, // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
  signatureData: SignatureData | undefined | null,
  typedValue?: string,
  inputCurrency?: any
): { state: SwapCallbackState; callback: null | (() => Promise<string>); error: ReactNode | null } {
  const { account, chainId } = useWeb3React()
  const deadline = useTransactionDeadline()

  const addTransaction = useTransactionAdder()

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress
  const inputAmount = useMemo(
    () => tryParseCurrencyAmount(typedValue, inputCurrency ?? undefined),
    [inputCurrency, typedValue]
  )
  const amount = inputAmount ? `0x${inputAmount.quotient.toString(16)}` : undefined
  // trade
  //   ? trade.inputAmount.currency.isToken
  //     ? Number(typedValue) * 10 ** trade?.inputAmount.currency.decimals
  //     : undefined
  //   : undefined
  const {
    state,
    callback: libCallback,
    error,
  } = useLibSwapCallBack({
    trade,
    allowedSlippage,
    recipientAddressOrName: recipient,
    signatureData,
    deadline,
  })
  const donateContract = useDonateContract()
  console.log(inputAmount)
  const callback = useMemo(() => {
    if (
      (chainId === SupportedChainId.GOERLI && trade?.inputAmount.currency.isToken) ||
      (chainId === SupportedChainId.MAINNET && trade?.inputAmount.currency.isToken)
    ) {
      return async () => {
        if (!donateContract) {
          console.error('Swap failde')
          return
        }
        if (!trade) {
          console.error('trade failde')
          return
        }
        const estimatedGas = await donateContract
          .donate(trade.inputAmount.currency.isToken ? trade.inputAmount.currency.address : trade, amount)
          .catch(() => {
            return donateContract.estimateGas.donate(
              trade.inputAmount.currency.isToken ? trade.inputAmount.currency.address : trade,
              amount
            )
          })

        return donateContract
          .donate(trade.inputAmount.currency.isToken ? trade.inputAmount.currency.address : trade, amount, {
            gasLimit: calculateGasMargin(estimatedGas),
          })
          .then((response: TransactionResponse) => {
            addTransaction(
              response,
              trade.tradeType === TradeType.EXACT_INPUT
                ? {
                    type: TransactionType.SWAP,
                    tradeType: TradeType.EXACT_INPUT,
                    inputCurrencyId: currencyId(trade.inputAmount.currency),
                    inputCurrencyAmountRaw: trade.inputAmount.quotient.toString(),
                    expectedOutputCurrencyAmountRaw: trade.outputAmount.quotient.toString(),
                    outputCurrencyId: currencyId(trade.outputAmount.currency),
                    minimumOutputCurrencyAmountRaw: trade.minimumAmountOut(allowedSlippage).quotient.toString(),
                  }
                : {
                    type: TransactionType.SWAP,
                    tradeType: TradeType.EXACT_OUTPUT,
                    inputCurrencyId: currencyId(trade.inputAmount.currency),
                    maximumInputCurrencyAmountRaw: trade.maximumAmountIn(allowedSlippage).quotient.toString(),
                    outputCurrencyId: currencyId(trade.outputAmount.currency),
                    outputCurrencyAmountRaw: trade.outputAmount.quotient.toString(),
                    expectedInputCurrencyAmountRaw: trade.inputAmount.quotient.toString(),
                  }
            )
            return response.hash
          })
          .catch((error: Error) => {
            console.debug('Failed', error)
            throw error
          })
      }
    } else {
      if (!libCallback || !trade) {
        return null
      }
      return () =>
        libCallback().then((response) => {
          addTransaction(
            response,
            trade.tradeType === TradeType.EXACT_INPUT
              ? {
                  type: TransactionType.SWAP,
                  tradeType: TradeType.EXACT_INPUT,
                  inputCurrencyId: currencyId(trade.inputAmount.currency),
                  inputCurrencyAmountRaw: trade.inputAmount.quotient.toString(),
                  expectedOutputCurrencyAmountRaw: trade.outputAmount.quotient.toString(),
                  outputCurrencyId: currencyId(trade.outputAmount.currency),
                  minimumOutputCurrencyAmountRaw: trade.minimumAmountOut(allowedSlippage).quotient.toString(),
                }
              : {
                  type: TransactionType.SWAP,
                  tradeType: TradeType.EXACT_OUTPUT,
                  inputCurrencyId: currencyId(trade.inputAmount.currency),
                  maximumInputCurrencyAmountRaw: trade.maximumAmountIn(allowedSlippage).quotient.toString(),
                  outputCurrencyId: currencyId(trade.outputAmount.currency),
                  outputCurrencyAmountRaw: trade.outputAmount.quotient.toString(),
                  expectedInputCurrencyAmountRaw: trade.inputAmount.quotient.toString(),
                }
          )
          return response.hash
        })
    }
  }, [addTransaction, allowedSlippage, libCallback, trade])

  return {
    state,
    callback,
    error,
  }
}
