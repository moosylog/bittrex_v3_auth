var _0x5de7=['\x62\x61\x6c\x61\x6e\x63\x65\x2f','\x6b\x65\x79\x73','\x61\x76\x61\x69\x6c\x61\x62\x6c\x65','\x70\x75\x73\x68','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x65\x78\x2e\x69\x6f\x2f\x61\x70\x69\x2f','\x67\x65\x74\x54\x69\x6d\x65','\x63\x6f\x6d\x70\x75\x74\x65\x48\x6d\x61\x63\x53\x69\x67\x6e\x61\x74\x75\x72\x65','\x4d\x61\x63\x41\x6c\x67\x6f\x72\x69\x74\x68\x6d','\x48\x4d\x41\x43\x5f\x53\x48\x41\x5f\x32\x35\x36','\x6d\x61\x70','\x73\x6c\x69\x63\x65','\x6a\x6f\x69\x6e','\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65','\x70\x6f\x73\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x66\x65\x74\x63\x68','\x70\x61\x72\x73\x65','\x67\x65\x74\x43\x6f\x6e\x74\x65\x6e\x74\x54\x65\x78\x74'];var _0x75de=function(_0xe4d8f0,_0x839e2a){_0xe4d8f0=_0xe4d8f0-0x0;var _0x3c671f=_0x5de7[_0xe4d8f0];return _0x3c671f;};function CEX_GetBalances(_0x4c3c40){var _0x269e7a=[],_0x342e2b=cex_auth(_0x75de('0x0'),ADATTRIB,EXKEY,EXSECRET);bal=0x0;if(_0x342e2b==null){return null;}var _0x40a7ba=Object[_0x75de('0x1')](_0x342e2b);for(var _0x5bc236=0x2;_0x5bc236<_0x40a7ba['\x6c\x65\x6e\x67\x74\x68'];_0x5bc236++){if(Number(_0x342e2b[_0x40a7ba[_0x5bc236]][_0x75de('0x2')])*0x2710>0x0){_0x269e7a[_0x75de('0x3')]({'\x63\x75\x72\x63\x6f\x64\x65\x45\x58':_0x40a7ba[_0x5bc236],'\x62\x61\x6c\x61\x6e\x63\x65':_0x342e2b[_0x40a7ba[_0x5bc236]][_0x75de('0x2')]});}}return _0x269e7a;}function CEX_GetMarkets(){return null;}function cex_auth(_0x4679a0,_0x21d436,_0x5771d7,_0x3c6083,_0x2f3a89){var _0x4afc63=_0x75de('0x4');var _0x556144=new Date()[_0x75de('0x5')]();var _0x106fc0=Utilities[_0x75de('0x6')](Utilities[_0x75de('0x7')][_0x75de('0x8')],_0x556144['\x74\x6f\x53\x74\x72\x69\x6e\x67']()+_0x21d436+_0x5771d7,_0x3c6083);var _0x2646bd=_0x106fc0[_0x75de('0x9')](function(_0x325cd5){return('\x30'+(_0x325cd5&0xff)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))[_0x75de('0xa')](-0x2);})[_0x75de('0xb')]('')[_0x75de('0xc')]();var _0x4259e2={'\x6d\x65\x74\x68\x6f\x64':_0x75de('0xd'),'\x70\x61\x79\x6c\x6f\x61\x64':{'\x6b\x65\x79':_0x5771d7,'\x73\x69\x67\x6e\x61\x74\x75\x72\x65':_0x2646bd,'\x6e\x6f\x6e\x63\x65':_0x556144[_0x75de('0xe')]()}};var _0x4a86c6=UrlFetchApp[_0x75de('0xf')](_0x4afc63+_0x4679a0,_0x4259e2);var _0x5cd04e=JSON[_0x75de('0x10')](_0x4a86c6[_0x75de('0x11')]());return _0x5cd04e;}