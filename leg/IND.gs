function IND_GetBalances(arg){var array=[],response="";r= "";total= 0;if(ADATTRIB=== 'demo'){response= {"success":1,"return":{"balance":{"idr":2000000,"usd":10,"btc":1.52,"ltc":33.14,"doge":1600.299,"xpy":529.1239},"server_time":1392225342}}}else {response= IND_auth('getInfo',EXKEY,EXSECRET)};try{r= response['return']['balance']}catch(e){Logger["log"](response);return (false)};if(response["success"]!= 1){Logger["log"]("No Success: "+ response["success"]);return (false)};for(r in response['return']['balance']){if(Number(response['return']['balance'][r])!= 0){array["push"]({curcodeEX:r["toUpperCase"](),balance:Number(response['return']['balance'][r])})}};DebugLog("IND_GetBalances",array);return (array)}function IND_auth(command,key,secret){var nonce= new Date()["getTime"](),body='method=getInfo&nonce='+ nonce.toString(),sign=Utilities["computeHmacSignature"](Utilities["MacAlgorithm"].HMAC_SHA_512,body,secret),signature=sign["map"](function(e){return ("0"+ (e& 0xFF).toString(16))["slice"](-2)})["join"](""),params={'method':'post','muteHttpExceptions':true,'headers':{'Content-Type':'application/x-www-form-urlencoded','Key':key,'Sign':signature},'payload':body};return (JSON["parse"](UrlFetchApp["fetch"]("https://indodax.com/tapi/?"+ command,params)["getContentText"]()))}