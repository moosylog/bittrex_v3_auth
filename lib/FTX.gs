var _0x2629=['1665100OzSzIA','command','parse','4133wYmQro','Receiving\x20data\x20from\x20','log','no\x20or\x20empty\x20response:','\x22];','slice','debug','push','FTX\x20Exchange','ATA=','map','msgBox','945593ZOFnpQ','Err:\x20FTX_PrivateRequest\x20-\x20thirdattrib\x20missing?','2657985GTMGud','total','uri','thirdattrib','Err:\x20FTX_PublicRequest\x20-\x20error\x20in\x20FTX\x20payload','83zWEzbq','USD','result','params','GET','secret','application/json','toString','316165vrEMqQ','FTX_GetBalances()','name','979hdbnoo','var\x20pnt\x20=\x20response.result[\x22','Demo\x20data','Fetching\x20from\x20....','indexOf','USDTBEAR','coin','demo','423JuQWpe','\x20demo','hasOwnProperty','https://ftx.com/api','HMAC_SHA_256','method','11199whWzfN','stringify','length','replace','463TFAQMC','\x20debug','getTime','undefined','URL\x20....','toLowerCase','/api','fetch','payload','FTX-SUBACCOUNT','FTX'];var _0x27b1=function(_0x24dbe5,_0x5987a3){_0x24dbe5=_0x24dbe5-0xae;var _0x26295e=_0x2629[_0x24dbe5];return _0x26295e;};(function(_0x5044c3,_0x3fd595){var _0x141e5e=_0x27b1;while(!![]){try{var _0x24384a=-parseInt(_0x141e5e(0xc0))+-parseInt(_0x141e5e(0xe3))*-parseInt(_0x141e5e(0xcb))+-parseInt(_0x141e5e(0xb1))+-parseInt(_0x141e5e(0xb8))*-parseInt(_0x141e5e(0xd1))+parseInt(_0x141e5e(0xe0))+-parseInt(_0x141e5e(0xd5))*-parseInt(_0x141e5e(0xc3))+-parseInt(_0x141e5e(0xb3));if(_0x24384a===_0x3fd595)break;else _0x5044c3['push'](_0x5044c3['shift']());}catch(_0x1b1f39){_0x5044c3['push'](_0x5044c3['shift']());}}}(_0x2629,0xd5f7a));function FTX_GetBalances(){var _0xfd4ea2=_0x27b1,_0x522549={'id':_0xfd4ea2(0xdf),'name':_0xfd4ea2(0xeb),'apikey':EXKEY,'secret':EXSECRET,'thirdattrib':'','command':'/wallet/all_balances','uri':_0xfd4ea2(0xce),'method':'GET','payload':''};Logger['log'](_0xfd4ea2(0xc1));if(typeof ADATTRIB!=_0xfd4ea2(0xd8))_0x522549[_0xfd4ea2(0xb6)]=ADATTRIB;Logger['log'](_0xfd4ea2(0xae)+ADATTRIB);if(ADATTRIB[_0xfd4ea2(0xda)]()[_0xfd4ea2(0xc7)](_0xfd4ea2(0xca))>=0x0){Logger[_0xfd4ea2(0xe5)](_0xfd4ea2(0xc5));var _0x1ad6a0={'success':!![],'result':{'main':[{'coin':_0xfd4ea2(0xc8),'free':2320.2,'total':2340.2},{'coin':'BTC','free':0x2,'total':3.2}],'nino':[{'coin':_0xfd4ea2(0xb9),'free':0x7d0,'total':0x898}]}};}else{DebugLog(_0xfd4ea2(0xc6),_0x522549[_0xfd4ea2(0xc2)]);var _0x497b49=FTX_PrivateRequest(_0x522549);DebugLog(_0xfd4ea2(0xd9),JSON[_0xfd4ea2(0xd2)](_0x497b49));var _0x1ad6a0=JSON[_0xfd4ea2(0xe2)](UrlFetchApp[_0xfd4ea2(0xdc)](_0x497b49['uri'],_0x497b49[_0xfd4ea2(0xbb)]));DebugLog(_0xfd4ea2(0xe4)+_0x522549[_0xfd4ea2(0xc2)],_0x1ad6a0),ADATTRIB[_0xfd4ea2(0xda)]()[_0xfd4ea2(0xc7)](_0xfd4ea2(0xe9))>=0x0&&(Browser[_0xfd4ea2(0xb0)](_0x522549[_0xfd4ea2(0xc2)]+'\x20Connector\x20DEBUG\x20Mode:'),Browser[_0xfd4ea2(0xb0)](JSON[_0xfd4ea2(0xd2)](_0x1ad6a0)));}try{var _0x5becf4=_0x1ad6a0['result']['main'];}catch(_0x386cc9){return Logger[_0xfd4ea2(0xe5)](_0x1ad6a0),Logger[_0xfd4ea2(0xe5)](_0xfd4ea2(0xe6)+UrlFetchApp['fetch'](_0x497b49[_0xfd4ea2(0xb5)],_0x497b49[_0xfd4ea2(0xbb)])),null;}if(ADATTRIB==''||ADATTRIB==_0xfd4ea2(0xca))var _0x5becf4=_0x1ad6a0[_0xfd4ea2(0xba)]['main'];else try{ADATTRIB=ADATTRIB['replace'](_0xfd4ea2(0xcc),''),ADATTRIB=ADATTRIB[_0xfd4ea2(0xd4)](_0xfd4ea2(0xd6),''),Logger[_0xfd4ea2(0xe5)]('ADATTRIB\x20=\x20'+ADATTRIB),eval(_0xfd4ea2(0xc4)+ADATTRIB+_0xfd4ea2(0xe7));}catch(_0x54ef16){Logger['log']('');}var _0x9827c0=[];for(r in _0x5becf4){_0x9827c0[_0xfd4ea2(0xea)]({'curcodeEX':_0x5becf4[r][_0xfd4ea2(0xc9)],'balance':_0x5becf4[r][_0xfd4ea2(0xb4)]});}return Logger[_0xfd4ea2(0xe5)]('=>'),Logger[_0xfd4ea2(0xe5)](_0x9827c0),_0x9827c0;}function FTX_PrivateRequest(_0x8ede92){var _0x4542fe=_0x27b1;function _0x345834(_0x521d37,_0x29e66b){var _0x43d4fc=_0x27b1;return _0x41c009(Utilities['computeHmacSignature'](Utilities['MacAlgorithm'][_0x43d4fc(0xcf)],_0x521d37,_0x29e66b))[_0x43d4fc(0xbf)]();}function _0x41c009(_0x3f6c27){var _0x33ef6a=_0x27b1;return _0x3f6c27[_0x33ef6a(0xaf)](function(_0x1c38ba){var _0x30bb36=_0x33ef6a;return('0'+(_0x1c38ba&0xff)[_0x30bb36(0xbf)](0x10))[_0x30bb36(0xe8)](-0x2);})['join']('');}if(_0x8ede92[_0x4542fe(0xcd)](_0x4542fe(0xdd))===![])_0x8ede92[_0x4542fe(0xdd)]='';var _0x1b35da=_0x8ede92[_0x4542fe(0xe1)];if(_0x8ede92[_0x4542fe(0xe1)][_0x4542fe(0xda)]()[_0x4542fe(0xc7)](_0x4542fe(0xdb))<0x0)_0x1b35da='/api'+_0x8ede92[_0x4542fe(0xe1)];var _0x2e60bd=_0x8ede92[_0x4542fe(0xdd)];if(_0x8ede92['payload']!=''&&_0x8ede92['method']===_0x4542fe(0xbc))_0x2e60bd=CreateURIQueryString(_0x8ede92['payload'],'?');var _0x4eba28=new Date()[_0x4542fe(0xd7)]()[_0x4542fe(0xbf)](),_0x33b1dd=_0x4eba28+_0x8ede92['method']+_0x1b35da+_0x2e60bd,_0x438cde=_0x345834(_0x33b1dd,_0x8ede92[_0x4542fe(0xbd)]),_0x545c48={'method':_0x8ede92['method'],'muteHttpExceptions':!![],'headers':{'content-type':_0x4542fe(0xbe),'Accept':_0x4542fe(0xbe),'FTX-TS':_0x4eba28,'FTX-KEY':_0x8ede92['apikey'],'FTX-SIGN':_0x438cde}};try{_0x8ede92[_0x4542fe(0xb6)]=_0x8ede92[_0x4542fe(0xb6)]['replace'](_0x4542fe(0xd6),'');_0x8ede92[_0x4542fe(0xdd)]!=''&&_0x8ede92[_0x4542fe(0xd0)]==='POST'&&(_0x545c48[_0x4542fe(0xdd)]=_0x8ede92['payload'],_0x2e60bd='');if(_0x8ede92[_0x4542fe(0xb6)]!=''&&_0x8ede92['thirdattrib'][_0x4542fe(0xd3)]>0x1)_0x545c48['headers'][_0x4542fe(0xde)]=encodeURIComponent(_0x8ede92['thirdattrib']);}catch(_0x456c5c){Logger[_0x4542fe(0xe5)](_0x4542fe(0xb2));}return{'uri':_0x8ede92[_0x4542fe(0xb5)]+_0x8ede92[_0x4542fe(0xe1)]+_0x2e60bd,'params':_0x545c48};}function FTX_PublicRequest(_0x47cb77){var _0x68fb2e=_0x27b1;if(_0x47cb77['hasOwnProperty'](_0x68fb2e(0xdd))===![])_0x47cb77[_0x68fb2e(0xdd)]='';try{if(_0x47cb77[_0x68fb2e(0xdd)]!='')_0x47cb77['payload']=CreateURIQueryString(_0x47cb77[_0x68fb2e(0xdd)],'?');}catch(_0x4a349){Logger[_0x68fb2e(0xe5)](_0x68fb2e(0xb7));}var _0x33f5b7={'method':_0x47cb77[_0x68fb2e(0xd0)],'muteHttpExceptions':!![],'headers':{'content-type':_0x68fb2e(0xbe),'Accept':_0x68fb2e(0xbe)}};return{'uri':_0x47cb77[_0x68fb2e(0xb5)]+_0x47cb77['command']+_0x47cb77['payload'],'params':_0x33f5b7};}
