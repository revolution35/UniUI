(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[16],{1719:function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"},{value:1e15,symbol:"Qa"},{value:1e18,symbol:"Qi"}],n=/\.0+$|(\.[0-9]*[1-9])0+$/,a=r.slice().reverse().find((function(t){return e>=t.value}));return a?(e/a.value).toFixed(t).replace(n,"$1")+a.symbol:"0"}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=parseFloat(e);return r>9999?n(r,0):r.toPrecision(t)},c=function(e){return e>=98?n(e,2):e<=.1?e.toFixed(2):e.toPrecision(2)}},1734:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){var t=Date.parse(e.toString());return!isNaN(t)},a=function(e){var t=new Date(e).getTime(),r=(new Date).getTime()-t,n=Math.floor(r/864e5),a=Math.floor(r%864e5/36e5),c=Math.floor(r%36e5/6e4);return n>0?"".concat(n," day").concat(n>1?"s":""," ago"):a>0?"".concat(a," hour").concat(a>1?"s":""," ago"):c>1?"".concat(c," minutes ago"):"Just now"}},1873:function(e,t,r){},2023:function(e,t,r){"use strict";r.r(t);var n,a=r(4),c=r.n(a),o=r(15),s=r(11),l=r(239),i=r(559),u=r(75),g=r(118),j=r(152),d=r(297),b=r(74),m=r(503),h=r(185),O=r(383),f=r(710),w=r(1719),p=r(1),v=r(328),x=r(60),z=r(1734),y=r(101),C=(r(326),r(502),r(1873),"_1mor7ve1 rgw6ez294 rgw6ez27p rgw6ez2em rgw6ez2d7"),S=r(0),T=function(e){var t,r,n=e.event,a=e.index,c=e.current,o=Object(y.g)(),s=Object(p.useMemo)((function(){return n.price?Object(f.a)(Object(O.c)(n.price)).toString():null}),[n.price]),i=Object(p.useMemo)((function(){var e=56;return c===a?0===c?0:28:a>c?0===c?(a-c)*e:(a-c)*e+28:a<c?0===c?-(c-a)*e:-((c-a)*e-28):0}),[a,c]);return Object(S.jsxs)(g.c,{className:Object(l.default)("_1mor7veg rgw6ez43a rgw6ez2y rgw6ez36",a===c&&"rgw6ez5ny"),paddingTop:"8",paddingBottom:"8",fontSize:"14",width:"full",paddingLeft:"16",style:{transform:"translateY(".concat(i,"px)")},onClick:function(e){e.preventDefault(),e.stopPropagation(),o("/nfts/asset/".concat(n.collectionAddress,"/").concat(n.tokenId,"?origin=explore"))},children:[Object(S.jsx)(u.b,{as:"img",src:null===(t=n.tokenMetadata)||void 0===t?void 0:t.imageUrl,borderRadius:"12",marginRight:"8",width:"40",height:"40"}),Object(S.jsxs)(u.b,{as:"span",color:"explicitWhite",children:[Object(S.jsx)(u.b,{as:"span",children:h.b[n.eventType]}),Object(S.jsx)(u.b,{as:"span",color:"grey300",paddingLeft:"4",paddingRight:"4",children:"for"}),s," ETH"]}),n.eventTimestamp&&Object(z.b)(n.eventTimestamp)&&Object(S.jsxs)(u.b,{className:"rgw6ez43a rgw6ezaa rgw6ez4dy rgw6ez39y rgw6ez35u rgw6ez32s rgw6ez34i rgw6ez3ca rgw6ez3fi",children:[Object(z.a)(null===(r=n.eventTimestamp)||void 0===r?void 0:r.toString()),n.marketplace&&Object(S.jsx)(N,{marketplace:n.marketplace})]})]})},k=function(e){var t,r=e.address,n=Object(p.useState)(0),a=Object(s.a)(n,2),c=a[0],o=a[1],l=Object(p.useReducer)((function(e){return!e}),!1),i=Object(s.a)(l,2),j=i[0],d=i[1],b=Object(y.g)(),h=Object(v.useQuery)(["collectionActivity",r],(function(){return Object(m.a)(r)}),{staleTime:5e3}).data;return Object(p.useEffect)((function(){var e=setInterval((function(){h&&!j&&o(c===h.events.length-1?0:c+1)}),3e3);return function(){return clearInterval(e)}}),[c,h,j]),Object(S.jsx)(g.b,{borderRadius:"20",overflow:"hidden",onMouseEnter:d,onMouseLeave:d,marginTop:"40",style:{background:"rgba(13, 14, 14, 0.7)",height:"270px",width:"60%"},children:h?Object(S.jsxs)(u.b,{display:"flex",flexDirection:"row",flexWrap:"nowrap",overflow:"hidden",children:[Object(S.jsx)(g.b,{padding:"20",style:{maxWidth:"286px"},children:Object(S.jsx)(u.b,{as:"img",src:null===(t=h.events[c].tokenMetadata)||void 0===t?void 0:t.imageUrl,borderRadius:"12",style:{width:"230px",height:"230px"},onClick:function(e){e.preventDefault(),e.stopPropagation(),b("/nfts/asset/".concat(r,"/").concat(h.events[c].tokenId,"?origin=explore"))}})}),Object(S.jsx)(g.b,{width:"full",position:"relative",children:h.events.map((function(e,t){return Object(S.jsx)(T,{event:e,index:t,current:c},t)}))})]}):null})},N=function(e){var t=e.marketplace;return Object(S.jsx)(u.b,{as:"img",alt:t,src:"/nft/svgs/marketplaces/".concat(t,".svg"),className:"_1mor7vel rgw6ezzy rgw6ez16g rgw6ez69i rgw6ez3sm rgw6ezjg"})},F=new v.QueryClient,D=function(){var e=Object(p.useState)(Math.floor(5*Math.random())),t=Object(s.a)(e,2),r=t[0],n=t[1],a=Object(p.useState)(!1),l=Object(s.a)(a,2),g=l[0],j=l[1],d=Object(i.a)().width,O=Object(v.useQuery)(["trendingCollections"],(function(){return Object(m.m)({volumeType:"eth",timePeriod:h.j.OneDay,size:5})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}).data;return Object(p.useEffect)((function(){var e=!1;if(!g&&!e){var t=setInterval(Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=6;break}return t=(r+1)%O.length,a=O[t].address,n(t),e.next=6,F.prefetchQuery(["collectionActivity",a],(function(){return Object(m.a)(a)}));case 6:case"end":return e.stop()}}),e)}))),15e3);return function(){e=!0,clearInterval(t)}}}),[r,O,g]),Object(S.jsx)(u.b,{onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},cursor:"pointer",width:"full",children:O&&O[r]?Object(S.jsx)(x.b,{to:"/nfts/collection/".concat(O[r].address),style:{textDecoration:"none"},children:Object(S.jsx)(u.b,{style:{height:"386px"},children:Object(S.jsxs)("div",{className:"_1mor7ve3 rgw6ez43m rgw6ez6je rgw6ez1am",style:{backgroundImage:"url(".concat(O[r].bannerImageUrl,")")},children:[Object(S.jsx)(u.b,{className:"_1mor7ve5 rgw6ez43a rgw6ez45m rgw6ez14g rgw6ez5ns rgw6ez2z4 rgw6ez3a4",width:"full"}),Object(S.jsxs)(u.b,{as:"section",className:C,display:"flex",flexDirection:"row",flexWrap:"nowrap",children:[Object(S.jsx)(M,{collection:O[r],hovered:g,rank:r+1}),d&&d>b.a.lg&&Object(S.jsx)(k,{address:O[r].address})]}),Object(S.jsx)(I,{length:O.length,currentIndex:r,setCurrent:n})]})})}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("p",{children:"Loading"})})})},M=function(e){var t=e.collection,r=e.rank,n=e.hovered;return Object(S.jsxs)(g.b,{className:"_1mor7ve9 rgw6ez14g",paddingTop:"40",children:[Object(S.jsxs)("div",{className:"_1mor7veb rgw6ez2jg rgw6ez22y rgw6ez2em rgw6ez294 rgw6ez4b4 rgw6ez4fs",children:["#",r," volume in 24hr"]}),Object(S.jsxs)(g.c,{children:[Object(S.jsx)(u.b,{as:"span",marginTop:"16",className:Object(l.default)(d.i,"_1mor7ve7 rgw6ez40m rgw6ez6je rgw6ez40a rgw6ez40g rgw6ez3zs rgw6ez46m"),children:t.name}),t.isVerified&&Object(S.jsx)(u.b,{as:"span",marginTop:"24",children:Object(S.jsx)(j.rb,{height:"32",width:"32"})})]}),Object(S.jsxs)(g.c,{className:d.c,marginTop:"12",color:"explicitWhite",children:[Object(S.jsxs)(u.b,{children:[Object(S.jsx)(u.b,{as:"span",color:"textSecondary",marginRight:"4",children:"Floor:"}),t.floor?Object(O.c)(t.floor.toString()):"--"," ETH"]}),Object(S.jsx)(u.b,{children:t.floorChange?Object(S.jsxs)(u.b,{as:"span",color:t.floorChange>0?"green200":"accentFailure",marginLeft:"4",children:[t.floorChange>0&&"+",Object(w.a)(t.floorChange),"%"]}):null}),Object(S.jsxs)(u.b,{marginLeft:"24",color:"explicitWhite",children:[Object(S.jsx)(u.b,{as:"span",color:"textSecondary",marginRight:"4",children:"Volume:"}),t.volume?Object(f.a)(+Object(w.b)(t.volume.toString())):"--"," ETH"]}),Object(S.jsx)(u.b,{children:t.volumeChange?Object(S.jsxs)(u.b,{as:"span",color:t.volumeChange>0?"green200":"accentFailure",marginLeft:"4",children:[t.volumeChange>0&&"+",Object(w.a)(t.volumeChange),"%"]}):null})]}),Object(S.jsx)(x.b,{className:Object(l.default)(d.d,"_1mor7ved rgw6ez46m rgw6ezw4 rgw6ez69u rgw6ez2pa rgw6ez2em rgw6ez294"),to:"/nfts/collection/".concat(t.address),style:{textDecoration:"none",backgroundColor:"".concat(n?b.d.color.blue400:b.d.color.grey700)},children:"Explore collection"})]})},I=function(e){var t=e.length,r=e.currentIndex,n=e.setCurrent;return Object(S.jsx)(g.a,{marginTop:"16",children:Array(t).fill(null).map((function(e,t){return Object(S.jsx)(u.b,{cursor:"pointer",paddingTop:"16",paddingBottom:"16",position:"relative",onClick:function(e){e.preventDefault(),e.stopPropagation(),n(t)},children:Object(S.jsx)(u.b,{as:"span",className:"rgw6ez114 rgw6ez15y rgw6ezos rgw6ez6au rgw6ez3zs",display:"inline-block",backgroundColor:r===t?"explicitWhite":"accentTextLightTertiary"})},t)}))})},P=r(5),E=function(e){var t=e.value;return Object(S.jsx)("span",{children:t.value?Object(f.a)(t.value):"-"})},H=function(e){var t=e.value;return Object(S.jsx)(g.c,{justifyContent:"flex-end",color:"textPrimary",children:t.value?Object(S.jsxs)(S.Fragment,{children:[Object(O.a)(t.value.toString())," ETH"]}):"-"})},L=function(e){var t=e.value;return Object(S.jsxs)(g.b,{gap:"4",children:[Object(S.jsx)(H,{value:{value:t.value}}),t.change?Object(S.jsxs)(u.b,{as:"span",color:t.change>0?"green":"accentFailure",fontWeight:"normal",fontSize:"12",position:"relative",children:[t.change>0&&"+",Object(w.a)(t.change),"%"]}):null]})},_=function(e){var t=e.value;return Object(S.jsxs)(g.b,{gap:"4",children:[Object(S.jsx)(g.c,{justifyContent:"flex-end",color:"textPrimary",children:t&&t.value?Object(S.jsxs)(S.Fragment,{children:[Object(O.f)(t.value.toString(),!0)," ETH"]}):"-"}),t.change?Object(S.jsxs)(u.b,{as:"span",color:t.change>0?"green":"accentFailure",fontWeight:"normal",fontSize:"12",position:"relative",children:[t.change>0&&"+",Object(w.a)(t.change),"%"]}):null]})},R=function(e){var t=e.value;return Object(S.jsxs)(g.b,{gap:"4",children:[Object(S.jsx)(E,{value:t}),t.change?Object(S.jsxs)(u.b,{as:"span",color:t.change>0?"green":"accentFailure",fontWeight:"normal",fontSize:"12",position:"relative",children:[t.change>0&&"+",Object(w.a)(t.change),"%"]}):null]})},W=r(82),V=r(1874),A=r(182),B=["columns","data","hiddenColumns","classNames"];function Q(e){var t=e.columns,r=e.data,a=e.hiddenColumns,c=e.classNames,o=Object(W.a)(e,B),s=Object(V.useTable)(Object(P.a)({columns:t,data:r,initialState:{sortBy:[{desc:!0,id:n.Volume}]}},o),V.useSortBy),i=s.getTableProps,g=s.getTableBodyProps,d=s.headerGroups,b=s.rows,m=s.prepareRow,h=s.setHiddenColumns,O=Object(y.g)();return Object(p.useEffect)((function(){a&&A.a?h(a):h([])}),[a,h]),Object(S.jsxs)("table",Object(P.a)(Object(P.a)({},i()),{},{className:"_1mor7ven rgw6ez14g rgw6ez69u rgw6ez68y",children:[Object(S.jsx)("thead",{className:"rgw6ezpa rgw6ez4xg rgw6ez6i2 rgw6ez69a",children:d.map((function(e){return Object(p.createElement)("tr",Object(P.a)(Object(P.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,t){return Object(p.createElement)("th",Object(P.a)(Object(P.a)({className:"_1mor7veq rgw6ezca rgw6ezaa rgw6ez6m6 rgw6ez48m rgw6ez48h rgw6ez68q rgw6ez2js rgw6ez23a"},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===t?"left":"right",paddingLeft:0===t?"52px":0},key:t}),Object(S.jsx)(u.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(S.jsx)(j.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(S.jsx)(j.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(S.jsx)(u.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(S.jsx)("tbody",Object(P.a)(Object(P.a)({},g()),{},{children:b.map((function(e,t){return m(e),Object(p.createElement)("tr",Object(P.a)(Object(P.a)({className:"rgw6ez68q"},e.getRowProps()),{},{key:t,onClick:function(){return O("/nfts/collection/".concat(e.original.collection.address))}}),e.cells.map((function(e,r){return Object(p.createElement)("td",Object(P.a)(Object(P.a)({className:Object(l.default)("_1mor7veu rgw6ezca rgw6ezam rgw6ez6me rgw6ez1gg rgw6ez2jm rgw6ez234 rgw6ez40s rgw6ez43m",null===c||void 0===c?void 0:c.td)},e.getCellProps()),{},{key:r}),0===r?Object(S.jsx)("span",{className:"rgw6ez48m rgw6ez43a rgw6ez3zt rgw6ez3z4 rgw6ez314 rgw6ez3by",children:t+1}):null,e.render("Cell"))})))}))}))]}))}!function(e){e.Volume="Volume",e.Floor="Floor",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(n||(n={}));var q=[{Header:"Collection",accessor:"collection",Cell:function(e){var t=e.value;return Object(S.jsxs)(g.c,{as:"span",style:{marginLeft:"52px"},children:[Object(S.jsx)("img",{className:"rgw6ez69u",src:t.logo,alt:"".concat(t.name," logo"),height:44,width:44}),Object(S.jsx)("span",{className:"rgw6ezca rgw6ezam rgw6ez6me rgw6ez48g rgw6ez40m rgw6ez6je rgw6ez40a rgw6ez40g rgw6ez28s rgw6ez2dg",children:t.name}),t.isVerified&&Object(S.jsx)("span",{className:"rgw6ez3zs rgw6ez2j4 rgw6ez17a rgw6ez10s rgw6ez40m",children:Object(S.jsx)(j.rb,{})})]})}},{id:n.Volume,Header:n.Volume,accessor:function(e){return e.volume.value},sortDescFirst:!0,Cell:function(e){return Object(S.jsx)(L,{value:e.row.original.volume})}},{id:n.Floor,Header:n.Floor,accessor:function(e){return e.floor.value},sortDescFirst:!0,Cell:function(e){return Object(S.jsx)(_,{value:e.row.original.floor})}},{id:n.Sales,Header:n.Sales,accessor:"sales",sortDescFirst:!0,Cell:function(e){return Object(S.jsx)(E,{value:{value:e.row.original.sales}})}},{id:n.Items,Header:n.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return Object(S.jsx)(E,{value:{value:e.row.original.totalSupply}})}},{Header:n.Owners,accessor:function(e){return e.owners.value},sortDescFirst:!0,Cell:function(e){return Object(S.jsx)(R,{value:e.row.original.owners})}}],U=function(e){var t=e.data;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(Q,{hiddenColumns:[n.Volume,n.Owners,n.Items,n.Sales],data:t,columns:q})})},J=[{label:"24 hour",value:h.j.OneDay},{label:"7 day",value:h.j.SevenDays},{label:"30 day",value:h.j.ThirtyDays},{label:"All time",value:h.j.AllTime}],$=function(){var e=Object(p.useState)(h.j.OneDay),t=Object(s.a)(e,2),r=t[0],n=t[1],a=Object(v.useQuery)(["trendingCollections",r],(function(){return Object(m.m)({volumeType:"eth",timePeriod:r,size:100})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:5e3}),c=a.isSuccess,o=a.data,i=Object(p.useMemo)((function(){return c&&o?o.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners,change:e.ownersChange},sales:e.sales,totalSupply:e.totalSupply})})):[]}),[o,c]);return Object(S.jsx)(u.b,{width:"full",className:C,children:Object(S.jsxs)(g.b,{width:"full",children:[Object(S.jsx)(g.c,{children:Object(S.jsx)(u.b,{as:"h2",className:d.j,marginTop:"88",children:"Trending Collections"})}),Object(S.jsx)(g.c,{children:Object(S.jsx)(u.b,{className:"rgw6ezfg rgw6ez184 rgw6ez69u rgw6ez6ia rgw6ez692 rgw6ez4xg",children:J.map((function(e){return Object(S.jsx)("span",{className:Object(l.default)("_1mor7vex rgw6ez294 rgw6ez2em rgw6ez2jy rgw6ez23g rgw6ez69u rgw6ezaa rgw6ez3zs rgw6ez68q",e.value===r&&"rgw6ez5ps"),onClick:function(){return n(e.value)},children:e.label},e.value)}))})}),Object(S.jsx)(g.c,{paddingBottom:"52",children:o?Object(S.jsx)(U,{data:i}):Object(S.jsx)("p",{children:"Loading"})})]})})};t.default=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(D,{}),Object(S.jsx)($,{})]})}}}]);
//# sourceMappingURL=16.62c81377.chunk.js.map