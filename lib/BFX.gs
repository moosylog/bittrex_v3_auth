var _0x1473=['toUpperCase','Sell','uri','slice','MacAlgorithm','substring','txid','history/movements','base64Encode','computeHmacSignature','nonce','https://api.bitfinex.com','last_price','stringify','BTC','map','command','symbol','request','payload','pubticker','bid','FeeCurrency','log','msgBox','push','executed_amount','amount','type','apikey','action','Price','Buy','status','apiversion','balances','pubticker/','application/json','Amount','symbols','BFX','join','Error:\x20Is\x20this\x20a\x20Bitfinex\x20file?\x20Can\x20not\x20find\x20[FeeCurrency]','HMAC_SHA_384','response','toString','array','abs','avg_execution_price','getTime','Pair','indexOf','method','currency','sort','BFX_Import','Date','Fee','/api','/v1/','toFixed','history\x20','side','BFX_Getorderhistory','ask','BFX_GetBalances','length','timestamp'];(function(_0x195482,_0x568727){var _0x14738d=function(_0x19688b){while(--_0x19688b){_0x195482['push'](_0x195482['shift']());}};_0x14738d(++_0x568727);}(_0x1473,0x1cf));var _0x1968=function(_0x195482,_0x568727){_0x195482=_0x195482-0x18f;var _0x14738d=_0x1473[_0x195482];return _0x14738d;};var _0x3ee495=_0x1968,BFXapiVersion=_0x3ee495(0x193),BFXbaseUrl=_0x3ee495(0x1a7);function BFXnonce(){var _0x41e889=_0x3ee495;return new Date()[_0x41e889(0x1cd)]()[_0x41e889(0x1c9)]();}function BFX_Ticker(_0x4aed66){var _0x466f0b=_0x3ee495,_0x1a237d=[],_0x11798e=LoadTick3(BFXbaseUrl+BFXapiVersion+_0x466f0b(0x1c0)+_0x4aed66,_0x466f0b(0x1c4)+_0x4aed66);if(_0x11798e==null)return null;return[[_0x11798e[_0x466f0b(0x1b1)],_0x11798e[_0x466f0b(0x198)],_0x11798e[_0x466f0b(0x1a8)]]];}function BFX_GetMarkets(){var _0x49bad7=_0x3ee495,_0x440a86=Fetch(BFXbaseUrl+BFXapiVersion+'symbols');if(_0x440a86==null)return null;var _0x342c4f=[];for(r in _0x440a86){_0x342c4f[_0x49bad7(0x1b5)]([_0x440a86[r][_0x49bad7(0x19c)]()]);}return _0x342c4f;}function BFX_GetMarketSummary(_0x585b43,_0x35c9f0,_0x35676a){var _0x34caa8=_0x3ee495,_0x2db7e3=_0x34caa8(0x1b0),_0x28cf43={'muteHttpExceptions':!![]},_0x29bcf6=Fetch(BFXbaseUrl+BFXapiVersion+_0x2db7e3+'/'+_0x585b43+_0x35c9f0,_0x28cf43);if(_0x29bcf6==null)return null;if(isNaN(parseFloat(_0x29bcf6[_0x34caa8(0x1a8)])))return null;if(!isNaN(parseFloat(_0x29bcf6[_0x34caa8(0x1a8)])))return parseFloat(_0x29bcf6[_0x34caa8(0x1a8)])[_0x34caa8(0x194)](0x8);};function BFX_GetBalances(_0x1e319b,_0x1d7749){var _0x1b563e=_0x3ee495;function _0x4d0509(_0x62f206,_0x89977a){var _0x281ac7=_0x1968;_0x62f206[_0x281ac7(0x1d2)](_0x537ebc);function _0x537ebc(_0x1842bc,_0x5d16e1){return _0x1842bc=_0x1842bc[_0x89977a],_0x5d16e1=_0x5d16e1[_0x89977a],_0x1842bc===_0x5d16e1?0x0:_0x1842bc<_0x5d16e1?-0x1:0x1;}}function _0x133d6c(_0x29408c){_0x4d0509(_0x29408c,0x0);var _0x29acfd,_0x49bd55=_0x29408c['reduce'](function(_0x5afc49,_0x44041e){if(_0x29acfd){if(_0x29acfd[0x0]===_0x44041e[0x0])return _0x29acfd[0x1]+=_0x44041e[0x1],_0x5afc49;}return _0x29acfd=_0x44041e,_0x5afc49['push'](_0x44041e),_0x5afc49;},[]);return _0x49bd55;}var _0x2bec97={};_0x2bec97[_0x1b563e(0x1ba)]=_0x1b563e(0x1bf);var _0x28a8c4=BFX_Auth(_0x2bec97);DebugLog(_0x1b563e(0x199),_0x28a8c4);if(_0x28a8c4==null)return null;if(_0x28a8c4[0x0][_0x1b563e(0x1d1)]==undefined)return DebugLog(_0x1b563e(0x199),'zero\x20response'),null;var _0x8a292c=[];for(var _0x325747 in _0x28a8c4){_0x8a292c['push']([_0x28a8c4[_0x325747][_0x1b563e(0x1d1)][_0x1b563e(0x19c)](),Number(_0x28a8c4[_0x325747][_0x1b563e(0x1b7)])]);}var _0x28a8c4=_0x133d6c(_0x8a292c),_0x8a292c=[];Logger[_0x1b563e(0x1b3)](_0x1b563e(0x1c8)+_0x28a8c4);for(var _0x325747 in _0x28a8c4){_0x8a292c[_0x1b563e(0x1b5)]({'curcodeEX':_0x28a8c4[_0x325747][0x0],'balance':Number(_0x28a8c4[_0x325747][0x1])});}return Logger['log'](_0x1b563e(0x1ca)+_0x8a292c),_0x8a292c;}function BFX_Getorderhistory(_0x51245e,_0x1388b8){var _0x44e241=_0x3ee495;function _0x36f700(_0x5395fa){var _0x42b2f0=0x5265c00,_0x5d8bc3=2440587.5;return new Date((Number(_0x5395fa)-_0x5d8bc3)*_0x42b2f0);}var _0x238f99={},_0x2807d0=[];_0x238f99['action']='orders/hist';var _0x4d16df=BFX_Auth(_0x238f99);if(_0x4d16df==null||_0x4d16df=='')return null;DebugLog(_0x44e241(0x197),_0x4d16df);try{Logger['log'](_0x4d16df[0x0][_0x44e241(0x1ad)]);}catch(_0xe126b){return VERBOSE=='NO'&&Browser[_0x44e241(0x1b4)]('Bitfinex\x20API\x20did\x20not\x20give\x20us\x20any\x20data.\x5cn\x5cnThere\x20is\x20a\x20max.\x20of\x201\x20request\x20per\x20minute\x5cn\x5cnSee\x20the\x20documentation\x20for\x20more\x20details.'),null;}for(r in _0x4d16df){_0x2807d0[_0x44e241(0x1b5)]({'date':new Date(_0x4d16df[r]['timestamp']*0x3e8),'type':CapFirstLetter(_0x4d16df[r][_0x44e241(0x196)]),'ncur':_0x4d16df[r][_0x44e241(0x1ad)][_0x44e241(0x19f)](0x0,-0x3)['toUpperCase'](),'nmarket':_0x4d16df[r][_0x44e241(0x1ad)][_0x44e241(0x19f)](-0x3)[_0x44e241(0x19c)](),'quantity':_0x4d16df[r][_0x44e241(0x1b6)],'unitprice':_0x4d16df[r][_0x44e241(0x1cc)],'fee':0x0,'nfeecur':_0x44e241(0x1aa),'ordernr':''});}return _0x2807d0;}function BFX_Movements(_0x323e67,_0x50dcdf){var _0x5f48d9=_0x3ee495,_0x401324=[];for(a in _0x323e67[_0x5f48d9(0x1c3)]){var _0x22dc9={'currency':_0x323e67[_0x5f48d9(0x1c3)][a]};_0x22dc9[_0x5f48d9(0x1ba)]=_0x5f48d9(0x1a3);var _0x43662e=BFX_Auth(_0x22dc9);if(_0x43662e===null)return 0x0;DebugLog('BFX_Get'+_0x50dcdf+_0x5f48d9(0x195)+_0x323e67[_0x5f48d9(0x1c3)][a],_0x43662e);for(r in _0x43662e){_0x43662e[r][_0x5f48d9(0x1b8)]==_0x50dcdf[_0x5f48d9(0x19c)]()&&_0x43662e[r][_0x5f48d9(0x1bd)]=='COMPLETED'&&_0x401324['push']([new Date(_0x43662e[r][_0x5f48d9(0x19b)]*0x3e8),_0x43662e[r]['currency'],_0x43662e[r][_0x5f48d9(0x1b7)],ToFiat(_0x43662e[r][_0x5f48d9(0x1d1)],_0x43662e[r]['amount']),_0x43662e[r][_0x5f48d9(0x1a2)],_0x43662e[r]['address']]);}}return _0x401324;}function BFX_Getdeposithistory(_0x13b735){return BFX_Movements(_0x13b735,'deposit');}function BFX_Getwithdrawhistory(_0x30b250){return BFX_Movements(_0x30b250,'withdraw');}function BFX_Import(_0x359c3c){var _0x401af0=_0x3ee495,_0xa326c6=GetCSVSheet(_0x359c3c);if(_0xa326c6==null)return null;DebugLog(_0x401af0(0x18f),_0xa326c6);var _0x50a1c9='';if(_0xa326c6[0x1]['FeeCurrency']==null)return Browser[_0x401af0(0x1b4)](_0x401af0(0x1c6)),null;var _0x6cc1cc=[];for(r in _0xa326c6){_0xa326c6[r][_0x401af0(0x1c2)]<0x0?(_0x50a1c9=_0x401af0(0x19d),_0xa326c6[r][_0x401af0(0x1c2)]=Math[_0x401af0(0x1cb)](_0xa326c6[r][_0x401af0(0x1c2)])):_0x50a1c9=_0x401af0(0x1bc),_0x6cc1cc[_0x401af0(0x1b5)]({'date':_0xa326c6[r][_0x401af0(0x190)],'type':_0x50a1c9,'ncur':_0xa326c6[r][_0x401af0(0x1ce)][_0x401af0(0x1a1)](_0xa326c6[r][_0x401af0(0x1ce)][_0x401af0(0x1cf)]('/'),0x0),'nmarket':_0xa326c6[r][_0x401af0(0x1ce)]['substring'](_0xa326c6[r][_0x401af0(0x1ce)][_0x401af0(0x1cf)]('/')+0x1,_0xa326c6[r][_0x401af0(0x1ce)][_0x401af0(0x19a)]),'quantity':_0xa326c6[r][_0x401af0(0x1c2)],'unitprice':_0xa326c6[r][_0x401af0(0x1bb)],'fee':Math[_0x401af0(0x1cb)](_0xa326c6[r][_0x401af0(0x191)]),'nfeecur':_0xa326c6[r][_0x401af0(0x1b2)],'ordernr':''});}return _0x6cc1cc;}function BFX_Auth(_0x57680c,_0x134461){var _0x5ec815=_0x3ee495;if(EXKEY!=''){_0x57680c['request']=BFXapiVersion+_0x57680c[_0x5ec815(0x1ba)],_0x57680c[_0x5ec815(0x1a6)]=new Date()[_0x5ec815(0x1cd)]()[_0x5ec815(0x1c9)](),delete _0x57680c['action'];var _0x22cad5=Utilities[_0x5ec815(0x1a5)](Utilities[_0x5ec815(0x1a0)][_0x5ec815(0x1c7)],Utilities['base64Encode'](JSON[_0x5ec815(0x1a9)](_0x57680c)),EXSECRET),_0x22cad5=_0x22cad5[_0x5ec815(0x1ab)](function(_0x554590){var _0x19d2fd=_0x5ec815;return('0'+(_0x554590&0xff)[_0x19d2fd(0x1c9)](0x10))[_0x19d2fd(0x19f)](-0x2);})[_0x5ec815(0x1c5)](''),_0x2797f0={'X-BFX-APIKEY':EXKEY,'X-BFX-PAYLOAD':Utilities[_0x5ec815(0x1a4)](JSON[_0x5ec815(0x1a9)](_0x57680c)),'X-BFX-SIGNATURE':_0x22cad5},_0x41e43e={'muteHttpExceptions':!![],'headers':_0x2797f0,'payload':JSON[_0x5ec815(0x1a9)](_0x57680c)};try{var _0x521a1c=Fetch(BFXbaseUrl+_0x57680c[_0x5ec815(0x1ae)],_0x41e43e);}catch(_0xd11387){return DebugLog('BFX_Auth',_0xd11387),null;}return _0x521a1c;}};function BFX_PrivateRequest(_0x59f5da){var _0x2b135c=_0x3ee495;if(_0x59f5da['payload']=='')_0x59f5da[_0x2b135c(0x1af)]={};var _0x87c651=new Date()[_0x2b135c(0x1cd)]()[_0x2b135c(0x1c9)](),_0x633033=_0x2b135c(0x192)+_0x59f5da[_0x2b135c(0x1be)]+_0x59f5da[_0x2b135c(0x1ac)]+_0x87c651+JSON['stringify'](_0x59f5da[_0x2b135c(0x1af)]),_0x208145={'method':_0x59f5da['method'],'muteHttpExceptions':!![],'contentType':_0x2b135c(0x1c1),'headers':{'bfx-nonce':_0x87c651,'bfx-apikey':_0x59f5da[_0x2b135c(0x1b9)],'bfx-signature':HMACSHA384HEX(_0x633033,_0x59f5da['secret'])},'payload':JSON[_0x2b135c(0x1a9)](_0x59f5da[_0x2b135c(0x1af)])};return{'uri':_0x59f5da[_0x2b135c(0x19e)]+_0x59f5da[_0x2b135c(0x1be)]+_0x59f5da[_0x2b135c(0x1ac)],'params':_0x208145};}function BFX_PublicRequest(_0x1fcfa2){var _0x36ae7a=_0x3ee495;return params={'method':_0x1fcfa2[_0x36ae7a(0x1d0)],'muteHttpExceptions':!![],'contentType':'application/json'},{'uri':_0x1fcfa2['uri']+_0x1fcfa2[_0x36ae7a(0x1be)]+_0x1fcfa2[_0x36ae7a(0x1ac)]+CreateURIQueryString(_0x1fcfa2[_0x36ae7a(0x1af)],'?'),'params':params};}
