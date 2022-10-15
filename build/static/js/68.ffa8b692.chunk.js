(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[68],{1611:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var a={messages:{Accept:"Accepter",Acknowledge:"Accuser r\xe9ception",Allow:"Permettre","Allow in your wallet":"Autoriser dans votre portefeuille","Allow {symbol} first":["Autoriser ",["symbol"]," en premier"],"Allowance pending":"Allocation en attente","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Une erreur s'est produite lors de la tentative d'ex\xe9cution de cet \xe9change. Vous devrez peut-\xeatre augmenter votre tol\xe9rance au slippage. Si cela ne fonctionne pas, il peut y avoir une incompatibilit\xe9 avec le token que vous \xe9changez. Remarque : les frais sur les token de transfert et de rebase sont incompatibles avec Uniswap V3.","Approval pending":"En attente d'approbation",Approve:"Approuver","Approve in your wallet":"Approuvez dans votre portefeuille","Approve {symbol} first":["Approuver ",["symbol"]," en premier"],Auto:"Automatique","Auto Router":"Routeur automatique","Balance:":"Solde :",Close:"Fermer","Confirm in your wallet":"Confirmez dans votre portefeuille","Confirm swap":"Confirmer l'\xe9change","Connect wallet":"Connecter le portefeuille","Connect wallet to swap":"Connectez le portefeuille pour \xe9changer","Connecting\u2026":"Connexion\u2026","Convert {0} to {1}":["Convertir ",["0"]," en ",["1"]],"Disconnect wallet":"D\xe9connecter le portefeuille",Dismiss:"Refuser","Enter an amount":"Saisissez un montant","Error details":"D\xe9tails de l'erreur","Error fetching trade":"Erreur lors de la r\xe9cup\xe9ration de l'\xe9change","Fetching best price\u2026":"Recherche du meilleur prix\u2026","High price impact":"Impact prix \xe9lev\xe9","High slippage":"Glissement \xe9lev\xe9","High slippage increases the risk of price movement":"Un glissement \xe9lev\xe9 augmente le risque de mouvement des prix","I don't have a wallet":"je n'ai pas de portefeuille","Insufficient liquidity in the pool for your trade":"Liquidit\xe9 insuffisante dans le pool pour votre transaction","Insufficient {0} balance":["Solde ",["0"]," insuffisant"],"Invalid recipient":"Destinataire invalide",Max:"Max","Max slippage":"Glissement maximum","Maximum sent":"Maximum envoy\xe9","Minimum received":"Minimum re\xe7u","Missing dependencies":"D\xe9pendances manquantes","Network fee":"Frais de r\xe9seau","No results found.":"Aucun r\xe9sultat trouv\xe9.","No tokens are available on this network. Please switch to another network.":"Aucun jeton n'est disponible sur ce r\xe9seau. Veuillez passer \xe0 un autre r\xe9seau.",OFF:"D\xc9SACTIV\xc9",ON:"AU","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["La production est estim\xe9e. Vous recevrez au moins ",["0"]," ",["1"]," ou la transaction sera annul\xe9e."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["La production est estim\xe9e. Vous enverrez au plus ",["0"]," ",["1"]," ou la transaction sera annul\xe9e."],"Please enter a valid slippage %":"Veuillez saisir un pourcentage de glissement valide","Please refresh the page and try again.":"Veuillez actualiser la page et r\xe9essayer.","Powered by the Uniswap protocol":"Propuls\xe9 par le protocole Uniswap","Price impact":"Impact sur les prix","Price updated":"Prix mis \xe0 jour","Recent transactions":"Transactions r\xe9centes","Reload the page":"Recharge la page",Reset:"R\xe9initialiser","Review swap":"\xc9change d'avis","Search by token name or address":"Recherche par nom de jeton ou adresse","Select a token":"S\xe9lectionnez un jeton",Settings:"R\xe9glages","Slippage tolerance":"Tol\xe9rance du slippage","Something went wrong.":"Quelque chose s'est mal pass\xe9.",Swap:"\xc9changer","Swap confirmed":"\xc9change confirm\xe9","Swap details":"D\xe9tails de l'\xe9change","Swap failed: {0}":["\xc9chec de l'\xe9change\xa0: ",["0"]],"Swap pending":"\xc9change en attente","Swap summary":"R\xe9sum\xe9 de l'\xe9change",Switch:"Changer","Switch network":"Changer de r\xe9seau","Switch network in your wallet":"Changez de r\xe9seau dans votre portefeuille","Switching network":"R\xe9seau de commutation","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"L'invariant Uniswap x*y=k n'a pas \xe9t\xe9 satisfait par l'\xe9change. Cela signifie g\xe9n\xe9ralement que l'un des jetons que vous \xe9changez incorpore un comportement personnalis\xe9 lors du transfert.","The input token cannot be transferred. There may be an issue with the input token.":"Le jeton d'entr\xe9e ne peut pas \xeatre transf\xe9r\xe9. Il peut y avoir un probl\xe8me avec le jeton d'entr\xe9e.","The output token cannot be transferred. There may be an issue with the output token.":"Le jeton de sortie ne peut pas \xeatre transf\xe9r\xe9. Il peut y avoir un probl\xe8me avec le jeton de sortie.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Le token de sortie ne peut pas \xeatre transf\xe9r\xe9. Il peut y avoir un probl\xe8me avec le token de sortie. Remarque\xa0: les frais sur les jetons de transfert et de rebase sont incompatibles avec Uniswap V3.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"La transaction n'a pas pu \xeatre envoy\xe9e car la date limite est pass\xe9e. Veuillez v\xe9rifier que la date limite de votre transaction n'est pas trop basse.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Cette transaction ne r\xe9ussira pas en raison du mouvement des prix. Essayez d'augmenter votre tol\xe9rance au slippage. Remarque\xa0: les frais sur les token de transfert et de rebase sont incompatibles avec Uniswap V3.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"Cette transaction ne r\xe9ussira pas en raison du mouvement des prix ou des frais de transfert. Essayez d'augmenter votre tol\xe9rance au glissement.","Transaction confirmed":"Transaction confirm\xe9e","Transaction deadline":"Date limite de la transaction","Transaction pending":"Transaction en attente","Transaction rejected.":"Transaction rejet\xe9e.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Essayez d'augmenter votre tol\xe9rance au glissement.<0/>REMARQUE : les frais de transfert et de rebase tokens sont incompatibles avec Uniswap V3.","Unexpected error. Could not estimate gas for the swap.":"Erreur inattendue. Impossible d'estimer le gaz pour l'\xe9change.","Unexpected issue with estimating the gas. Please try again.":"Probl\xe8me inattendu avec l'estimation du gaz. Veuillez r\xe9essayer.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Erreur inconnue",["0"],". Essayez d'augmenter votre tol\xe9rance au glissement. Remarque\xa0: les frais sur les tokens de transfert et de rebase sont incompatibles avec Uniswap V3."],"Unsupported network - switch to another to trade":"R\xe9seau non pris en charge - passez \xe0 un autre pour \xe9changer","Unwrap confirmed":"D\xe9ballage confirm\xe9","Unwrap pending":"D\xe9baller en attente","View on Etherscan":"Voir sur Etherscan","Your transaction will revert if it has been pending for longer than this period of time.":"Votre transaction sera annul\xe9e si elle est en attente depuis plus longtemps que cette p\xe9riode.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Votre transaction sera annul\xe9e si le prix change d\xe9favorablement de plus de ce pourcentage.",minutes:"minutes","{0} {1}":[["0"]," ",["1"]],"{caption}":[["caption"]],"{integrator} fee":[["integrator"]," frais"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"],"s"]}}}}]);
//# sourceMappingURL=68.ffa8b692.chunk.js.map