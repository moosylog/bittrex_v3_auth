const _0x20cb=['map','keys','currency','parse','payload','6651JMhdEs','join','sort','Bitforex','uri','/api/v1/fund/allAccount','150199YKOmYD','HMAC_SHA_256','29927AYQTaW','toString','active','3344gXXSCs','getTime','5bUHVsZ','computeHmacSignature','application/json','hasOwnProperty','accessKey','data','no\x20or\x20empty\x20response','2EHOcXz','apikey','params','command','nonce','13lPmZuG','374PoNpGL','1280603amhroH','log','235028THdtfF','183wbccaw','POST','secret','method','178869VfNYHC'];const _0x1734=function(_0x222d0f,_0x1f6bc8){_0x222d0f=_0x222d0f-0xd8;let _0x20cbec=_0x20cb[_0x222d0f];return _0x20cbec;};(function(_0x4e38de,_0x4bdc78){const _0x56c66b=_0x1734;while(!![]){try{const _0x30aa06=parseInt(_0x56c66b(0xe5))+-parseInt(_0x56c66b(0xf8))+-parseInt(_0x56c66b(0xf2))*parseInt(_0x56c66b(0xe8))+parseInt(_0x56c66b(0xe7))*-parseInt(_0x56c66b(0xde))+-parseInt(_0x56c66b(0xfd))*parseInt(_0x56c66b(0xe4))+parseInt(_0x56c66b(0xfa))*parseInt(_0x56c66b(0xff))+-parseInt(_0x56c66b(0xec))*-parseInt(_0x56c66b(0xe3));if(_0x30aa06===_0x4bdc78)break;else _0x4e38de['push'](_0x4e38de['shift']());}catch(_0x319f09){_0x4e38de['push'](_0x4e38de['shift']());}}}(_0x20cb,0xa2f63));function FOR_GetBalances(){const _0x7d23ed=_0x1734,_0x3332bf={'id':'FOR','name':_0x7d23ed(0xf5),'apikey':EXKEY,'secret':EXSECRET,'thirdattrib':ADATTRIB,'command':_0x7d23ed(0xf7),'uri':'https://api.bitforex.com','method':_0x7d23ed(0xe9),'payload':''};var _0x3c0b75=FOR_PrivateRequest(_0x3332bf),_0x4bf177=JSON[_0x7d23ed(0xf0)](UrlFetchApp['fetch'](_0x3c0b75[_0x7d23ed(0xf6)],_0x3c0b75[_0x7d23ed(0xe0)]));try{Logger[_0x7d23ed(0xe6)](_0x4bf177[_0x7d23ed(0xdc)][_0x7d23ed(0xef)]);}catch(_0x7debf4){return Logger['log'](_0x4bf177),Logger['log']('no\x20or\x20empty\x20response'),null;}_0x4bf177=_0x4bf177[_0x7d23ed(0xdc)];if(_0x4bf177==null||_0x4bf177=='')return Logger[_0x7d23ed(0xe6)](_0x7d23ed(0xdd)),null;var _0x4ddf4d=[];for(r in _0x4bf177){_0x4bf177[r][_0x7d23ed(0xfc)]*0x2710>0x0&&_0x4ddf4d['push']({'curcodeEX':_0x4bf177[r][_0x7d23ed(0xef)],'balance':_0x4bf177[r][_0x7d23ed(0xfc)]});}return Logger[_0x7d23ed(0xe6)](_0x4ddf4d),_0x4ddf4d;}function FOR_PrivateRequest(_0x95d108){const _0x31a129=_0x1734;function _0x356dc3(_0x4761d7,_0x33aae6){const _0x1d7180=_0x1734;return _0x24cd00(Utilities[_0x1d7180(0xd8)](Utilities['MacAlgorithm'][_0x1d7180(0xf9)],_0x4761d7,_0x33aae6))[_0x1d7180(0xfb)]();}function _0x24cd00(_0x3fc8fa){const _0x4a8b93=_0x1734;return _0x3fc8fa[_0x4a8b93(0xed)](function(_0x147047){const _0x3eeecd=_0x4a8b93;return('0'+(_0x147047&0xff)[_0x3eeecd(0xfb)](0x10))['slice'](-0x2);})[_0x4a8b93(0xf3)]('');}function _0x270631(_0x43cfa7){const _0x36df07=_0x1734;return Object[_0x36df07(0xee)](_0x43cfa7)[_0x36df07(0xf4)]()['reduce'](function(_0x58faf9,_0x39aa75){return _0x58faf9[_0x39aa75]=_0x43cfa7[_0x39aa75],_0x58faf9;},{});}const _0x58e0fc=new Date()[_0x31a129(0xfe)]()[_0x31a129(0xfb)]();if(_0x95d108[_0x31a129(0xda)](_0x31a129(0xf1))===![]||_0x95d108[_0x31a129(0xf1)]=='')_0x95d108[_0x31a129(0xf1)]={};_0x95d108['payload'][_0x31a129(0xe2)]=_0x58e0fc,_0x95d108[_0x31a129(0xf1)][_0x31a129(0xdb)]=_0x95d108[_0x31a129(0xdf)],_0x95d108[_0x31a129(0xf1)]=_0x270631(_0x95d108[_0x31a129(0xf1)]),_0x95d108[_0x31a129(0xf1)]=CreateURIQueryString(_0x95d108['payload'],'?');const _0x5a2908=_0x95d108[_0x31a129(0xe1)]+_0x95d108[_0x31a129(0xf1)],_0x57abfb=_0x356dc3(_0x5a2908,_0x95d108[_0x31a129(0xea)]),_0x448ad2={'method':_0x95d108['method'],'muteHttpExceptions':!![],'headers':{'Content-Type':'application/json'}};return{'uri':_0x95d108[_0x31a129(0xf6)]+_0x5a2908+'&signData='+_0x57abfb,'params':_0x448ad2};}function FOR_PublicRequest(_0x23ffc3){const _0x78f229=_0x1734,_0x3a1ab3={'method':_0x23ffc3[_0x78f229(0xeb)],'muteHttpExceptions':!![],'headers':{'Content-Type':_0x78f229(0xd9)}};var _0x207295='';if(_0x23ffc3['payload']!='')_0x207295=CreateURIQueryString(_0x23ffc3['payload'],'?');return{'uri':_0x23ffc3[_0x78f229(0xf6)]+_0x23ffc3['command']+_0x207295,'params':_0x3a1ab3};}