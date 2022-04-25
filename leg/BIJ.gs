var BINbaseUrl     ='https://api.binance.je/api/';
var BINapiVersion  ='v3/';

function BINnonce(){return 1*new Date}function BIN_Ticker(r){var e=LoadTick3(BINbaseUrl+"v1/ticker/24hr?symbol="+r);return null===e?null:[[e.bidPrice,e.askPrice,e.lastPrice]]}function BIN_GetMarkets(){var e=[],t=Fetch(BINbaseUrl+"v1/ticker/allPrices");if(null==t)return null;for(r in t)e.push([t[r].symbol,t[r].symbol,"","","","",""]);return e}function BIJ_GetBalances(){var e=[],t=BIN_PrivateRequest("account","");if(DebugLog("BIN_GetBalances",t),null==t)return null;try{Logger.log("verify: "+t.balances[0].asset)}catch(r){return Logger.log("no valid data balance received"),null}for(r in t.balances){var i=Number(t.balances[r].free)+Number(t.balances[r].locked);0<1e3*i&&e.push({curcodeEX:t.balances[r].asset,balance:i})}return e}function BIN_Getorderhistory(r){var e=[],t=[];if(null==r.symbols)t=MRKDATA;else for(a in r.symbols)t.push([r.symbols[a]+"BTC"]),t.push([r.symbols[a]+"ETH"]),t.push([r.symbols[a]+"BNB"]),t.push([r.symbols[a]+"PAX"]),t.push([r.symbols[a]+"ABC"]),t.push([r.symbols[a]+"USD"]),t.push([r.symbols[a]+"USDC"]),t.push([r.symbols[a]+"USDT"]);var i=null;for(var n in t){for(var s=!1,a=0;a<MRKDATA.length;a++)if(t[n]==MRKDATA[a][1]){s=!0;break}if(1==s){if("ON"==DEBUG&&ToastMessage(t[n],"fetching orders for pair .."),null==(i=BIN_PrivateRequest("myTrades","&symbol="+t[n])))return null;for(a in i)if(null!=i[a]&&""!=i[a]){if(t[n]=t[n].toString(),"SDT"==t[n].slice(-3))var o=t[n].slice(-4),u=t[n].substring(0,t[n].length-4);else o=t[n].slice(-3),u=t[n].substring(0,t[n].length-3);if("true"==i[a].isBuyer.toString())var l="Buy";else l="Sell";e.push({date:new Date(i[a].time),type:l,ncur:u,nmarket:o,quantity:Number(i[a].qty),unitprice:Number(i[a].price),fee:i[a].commission,nfeecur:i[a].commissionAsset,ordernr:i[a].orderId})}}}return DebugLog("BIN_Getorderhistory",e),e.sort(function(r,e){return e[0]-r[0]}),e}function BIN_Getdeposithistory(){var e={method:"get",headers:{"X-MBX-APIKEY":EXKEY}},t="&recvWindow=6000000".substr(1)+"&timestamp="+BINnonce(),i=BIN_Signature(EXSECRET,t);if(null==i)return 1;var n=Fetch("https://api.binance.com/wapi/v3/depositHistory.html?"+t+"&signature="+i,e);if(null==n)return null;try{Logger.log("verify: "+n.depositList[0].asset)}catch(r){return DebugLog("BIN_Getdeposithistory","Empty or error"),null}DebugLog("BIN_Getdeposithistory",n);var s=[];for(r in n.depositList)0!=n.depositList[r].amount&&s.push([new Date(n.depositList[r].insertTime),n.depositList[r].asset,n.depositList[r].amount,ToFiat(n.depositList[r].asset,n.depositList[r].amount),n.depositList[r].txId,n.depositList[r].address]);return s}function BIN_Getwithdrawhistory(){var e={method:"get",headers:{"X-MBX-APIKEY":EXKEY}},t="&recvWindow=6000000".substr(1)+"&timestamp="+BINnonce(),i=BIN_Signature(EXSECRET,t),n=Fetch("https://api.binance.com/wapi/v3/withdrawHistory.html?"+t+"&signature="+i,e);if(null==n)return null;try{Logger.log("verify: "+n.withdrawList[0].asset)}catch(r){return DebugLog("BIN_Getwithdrawalhistory","Empty or error"),null}DebugLog("BIN_Getwithdrawalhistory",n);var s=[];for(r in n.withdrawList)0!=n.withdrawList[r].amount&&s.push([new Date(n.withdrawList[r].successTime),n.withdrawList[r].asset,n.withdrawList[r].amount,ToFiat(n.withdrawList[r].asset,n.withdrawList[r].amount),n.withdrawList[r].txId,n.withdrawList[r].address]);return s}function BIN_Import(e){var t=[],i=GetCSVSheet(e);DebugLog("BIN_GetBalances",i);var n=0;if(null==i)return null;if(null==i[1]["Fee Coin"])return Browser.msgBox("Error: Is this a Binance file? Can not find [Fee Coin]"),null;if(null==i[1].Date)return Browser.msgBox("Error: If this a real [binance.csv] make sure cell A1 has the label 'Date'"),null;for(r in i)n="USDT"==i[r].Market.substr(i[r].Market.length-4)?4:3,t.push({date:new Date(i[r].Date.split("-").join("/")),type:CapFirstLetter(i[r].Type),ncur:i[r].Market.substr(0,i[r].Market.length-n),nmarket:i[r].Market.substr(i[r].Market.length-n),quantity:i[r].Amount,unitprice:i[r].Price,fee:i[r].Fee,nfeecur:i[r]["Fee Coin"],ordernr:""});return t}function BIN_Signature(r,e){try{var t=Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_SHA_256,e,r)}catch(r){return DebugLog("BIN_Signature",r),null}return BIN_stringSignature(t)}function BIN_stringSignature(r){var e="";for(i=0;i<r.length;i++){var t=r[i];t<0&&(t+=256);var n=t.toString(16);1==n.length&&(n="0"+n),e+=n}return e.toString()}function BIN_PrivateRequest(r,e){var t="timestamp="+BINnonce()+e+"&recvWindow=6000000",i=BIN_Signature(EXSECRET,t),n=BINbaseUrl+BINapiVersion+r,s={method:"get",headers:{"X-MBX-APIKEY":EXKEY}};t=t+"&signature="+i;try{var a=BINPrivFetch(n+"?"+t,s)}catch(r){return DebugLog("BIN_PrivateRequest Failed: ",r),null}return a}function BINPrivFetch(e,t){if(null!=t)try{var r=UrlFetchApp.fetch(e,t)}catch(r){return"NO"==VERBOSE&&(Browser.msgBox("Binance API error:\\n\\n"+r),DebugLog("BINFetch "+e+t,r)),null}else try{r=UrlFetchApp.fetch(e)}catch(r){return"NO"==VERBOSE&&(Browser.msgBox(r),DebugLog("BINFetch "+e+t,r)),null}return JSON.parse(r.getContentText())}