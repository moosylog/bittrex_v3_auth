# Exchange Collectors


![Moosy Research](https://sites.google.com/site/moosyresearch/_/rsrc/1511269486745/projects/cryptos/doc/logo.png)

Moosy Research is recognized for it's high quality, excel like cryptocurrency sheets, [Cointrexer, BotMon and ReX](https://sites.google.com/view/moosyresearch).

Most cryptocurrency Exchanges provide powerful API consisting of REST endpoints for transactional operations.
In order to authenticate to an Exchange API requires a valid API Key and a secret are required to access the private endpoints.

Many APIs require a signature during authentication that is calculated based on an algorithm like SHA.
On this page, you find a collection of Google App Script (GAS) functions for Signed / Private Requests to several exchanges.

These sample code snippets authenticate to the API and will list your balance in the built-in Logger.

**Disable the V8 runtime** if you have any issues with this code !!!

Please **★ Star** on the top of this page if you like this page and you want to motivate me to publish more.

To explore some of these APIs from Google Apps Script (GAS), you can try [ReX Explorer](https://sites.google.com/view/moosyresearch). It's an interactive API explorer in Sheets that allows you to see the request and the response data. **ReX** is great for **educational purposes**; the script log will show details on complete HTTP/REST request and response. To view the log from Google Sheets select: Tools, Script Editor, View, Logs  

[ReX Builder](https://sites.google.com/view/moosyresearch/documentation/rex-builder) is a tool that helps you create your own Google Sheet with Exchange API integrations without writing any Apps Script code.

Enjoy,

Moosy

<sub>Your donation is highly appreciated => ETH 0x4a15c8a7aeb99ae02c0a4fae53a34ae34aa9b438 </sub>


# Exchanges



| Exchange | Id   | OSS                                                          | CtrXL | ReX | API                                                          | Signature                                |
| ------ | ---- | ------------------------------------------------------------ | ---- | ------------------------------------------------------------ | ---------------------------------------- | ------ |
| Bibox          | BBX  |  | ✓ |  | [ ]()                                                        | HMACMD5                                  |
| Binance        | BIN  | [binance.gs](https://github.com/moosylog/exchange_collectors/blob/master/binance.gs) | ✓ | ✓ | [v3](https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md) | HMACSHA256HEX                            |
| Bit2C          | B2C  |  | ✓ |  | [ ]()                                                        | HMACSHA512B64                            |
| BitGo          | xxx  |  |      |      | [v2](https://app.bitgo.com/docs/#operation/v2.wallet.get)    | impossible / IP chk |
| Bitfinex       | BFX  | [bitfinex.gs](https://github.com/moosylog/exchange_collectors/blob/master/bitfinex.gs) | ✓ | ✓ | [v2](https://docs.bitfinex.com/docs/introduction)            | HMACSHA384HEX                            |
| Bitflyer       | FLY  | [bitflyer.gs](https://github.com/moosylog/exchange_collectors/blob/master/bitflyer.gs) | ✓ |  | [v1](https://lightning.bitflyer.com/docs?lang=en)            | HMACSHA256HEX                            |
| Bitforex | FOR |  | ✓ | ✓ |  | HMACSHA256HEX |
| Bitget         |     |                                                              |      |      | [v1](https://bitgetlimited.github.io/apidoc/en/swap/#the-signature) | HMACSHA256B64                            |
| Bitmart        | MRT  | [bitmart.gs](https://github.com/moosylog/exchange_collectors/blob/master/bitmart.gs) | ✓ | ✓ | [v1](https://developer-pro.bitmart.com/en/part1/start/overview.html) | HMACSHA256HEX                            |
| Bitmex         | BMX  | [bitmex.gs](https://github.com/moosylog/exchange_collectors/blob/master/bitmex.gs) | ✓ | ✓ | [v1](https://www.bitmex.com/app/apiOverview)                 | HMACSHA256HEX                            |
| Bitpanda       | PAN  |  | ✓ |  |                                             |                                          |
| Bitpanda GE    | PGE  |  | ✓ |  |                                             |                                          |
| Bitsane        | BSN  |  | ✓ |  |                                                         | HMACSHA384HEX                            |
| Bittrex        | BTX  | [bittrex.gs](https://github.com/moosylog/exchange_collectors/blob/master/bittrex.gs) | ✓ | ✓ | [v3](https://bittrex.github.io/api)                          | HMACSHA512HEX                            |
| Bitso          | BSO  |  | ✓ |  | [ ]()                                                        | HMACSHA256HEX                            |
| ByteTrade      |     |      |      |      | [v2](https://docs.byte-trade.com)                            | HMACSHA256HEX                            |
| BKex           | KEX  |  | ✓ | ✓ | [ ]()                                                        | HMACSHA256HEX                            |
| Bitstamp       | BTS  |  | ✓ |  | [ ]()                                                        | HMACSHA256HEX                            |
| Bitvavo        | VAV  |  | ✓ |  | [ ]()                                                        | HMACSHA256HEX                            |
| Bitz           |     |  |      |      | [v2](https://apidocv2.bitz.ai/en/#signature-authentication) | HMACSHA256B64                            |
| BtcTurk        | BTK  |  | ✓ |  | [ ]()                                                        | HMACSHA256B64enc                         |
| BTSE           |     | [todo](https://www.btse.com/apiexplorer/spot/#generating-api-key) |      |      | [v3](https://github.com/btsecom/api-sample/blob/master/python/spot/btseauth_spot.py) | HMACSHA384HEX                            |
| Bybit          | BYB  | [bybit.gs](https://github.com/moosylog/exchange_collectors/blob/master/bybit.gs) | ✓ | ✓ | [v1](https://github.com/bybit-exchange/bybit-official-api-docs) | HMACSHA256HEX                            |
| Cex.io         |      |                                                              | ✓ |  | [ ]() [See CtrXL]                                            |                                          |
| Coinall        | ALL  |                                                              | ✓ |  | [ ]() [See CtrXL]                                            |                                          |
| Coinbase       | CNB  | [coinbase.gs](https://github.com/moosylog/exchange_collectors/blob/master/coinbase.gs) | ✓ |  | [v2](https://developers.coinbase.com/)                       | HMACSHA256HEX                            |
| Coinbase Pro   | GD   |                                                              | ✓ | ✓ | [ ]() [See CtrXL]                                            |                                          |
| CoinDCX        | DCX  |                                                              | ✓ |  | [ ]() [See CtrXL]                                            |                                          |
| CoinEx         | CNX  |  | ✓ |  | [ ]() [See CtrXL]                                            |                                          |
| CoinONE        | .    | [Todo](https://doc.coinone.co.kr/)                           |      |      | [v2](https://doc.coinone.co.kr/#tag/Account-V2)              | HMACSHA512HEX                            |
| Crex24         | C24  |  | ✓ |  | [ ]()                                                        | HMACSHA256B64                            |
| Crypto APIs    | CRA  | [cryptoapis.gs](https://github.com/moosylog/exchange_collectors/blob/master/cryptoapis.gs) | ✓ |  | [v1](https://docs.cryptoapis.io/)                            | none                                     |
| Currency com   | CUR  |                                                              | ✓ | ✓ | [ ]() [See CtrXL]                                            |                                          |
| DCX            | DCX  |                                                              | ✓ |  | [ ]()                                                        | HMACSHA256HEX                            |
| Delta-Exchange | DEL  | [delta_exchange.gs](https://github.com/moosylog/exchange_collectors/blob/master/delta_exchange.gs) | ✓ | ✓ | [v2](https://docs.delta.exchange/)                           | HMACSHA256HEX                            |
| Deribit        | DRB  |  | ✓ | ✓ |                                             | Barrier Token |
| DeversiFi      |     | [Todo](https://github.com/DeversiFi/api-documentation/blob/master/trading/js/GetBalance.js) | .    |     | [v1](https://docs.deversifi.com/docs#postV1TradingRGetbalance) | ?                                        |
| eToro          | TOR |                                                              |     | ✓   | [?]()                                                        | not sure latest version          |
| eToroX         | TOX |  |     | ✓   | [v2](https://sites.google.com/site/moosyresearch/projects/cryptos/doc/exchanges#TOC-eToroX) | not sure latest version               |
| Forex          |   | bitforex?                                                    | .    |     |                                             |                                          |
| FTX            | FTX  |                                                              | ✓ | ✓ | [ ]() [See CtrXL]                                            |                                          |
| Gate.io        | GAT  |  | ✓ |  | [ ]() [See CtrXL]                                            |                                          |
| Gemini         | GEM  | [gemini.gs](https://github.com/moosylog/exchange_collectors/blob/master/gemini.gs) | ✓ | ✓ | [v1](https://docs.gemini.com/rest-api/)                      | HMACSHA384HEX                            |
| Globitex       | .    | [todo](https://globitex.com/api/#restAuthentication)         |      |      | [v?](https://globitex.com/api/#restAuthentication)           | HMACSHA512HEX                            |
| BitBTC         | HIT  |                                                              | ✓ |  | [ ]() [See CtrXL]                                            |                                          |
| Huobi Pro      | HUB  | [huobi.gs](https://github.com/moosylog/exchange_collectors/blob/master/huobi.gs) |      |      | [v1](https://github.com/huobiapi/API_Docs_en)                | HMACSHA256B64                            |
| Idex           | IDX  | [idex.gs](https://github.com/moosylog/exchange_collectors/blob/master/idex.gs) | ✓ |  | [v2](https://docs.idex.io)                                   | HMACSHA256HEX                            |
| Indodax        | IND  |                                                              | ✓ |  |                                             |                                          |
| Kraken         | KRK  | [kraken.gs](https://github.com/moosylog/exchange_collectors/blob/master/kraken.gs) | ✓ | ✓ | [v1](https://www.kraken.com/features/api#private-user-data)  | HMACSHA512++                             |
| Kucoin         | KUC  |                                                              | ✓ |  |                                             |                                          |
| Liquid         | Liq  |  | ✓ |  |                                             |                                          |
| Luno           | LUN  |                                                              | ✓ |  |                                                         | none                                     |
| MXC            | MXC  |  | ✓ | ✓ |                                             | HMACSHA256HEX |
| Nominex        |      |                                                              | ✓ |  |                                             |                                          |
| Okex           | OKX  | [okex.gs](https://github.com/moosylog/exchange_collectors/blob/master/okex.gs) | ✓     | ✓     | [v3](https://www.okex.com/docs/en/)                          | HMACSHA256B64                            |
| OkCoin         | OKC  |                                                              | ✓ | ✓ | [v3](https://www.okcoin.com/docs/en/)                        | HMACSHA256B64                            |
| OANDA          | OAN  | [oanda.gs](https://github.com/moosylog/exchange_collectors/blob/master/oanda.gs) | ✓ | ✓ (-) | [v2](http://developer.oanda.com/rest-live-v20/account-ep/)   | Barrier Token                            |
| Gopax          | PAX  |                                                              | ✓ |  |                                             |                                          |
| Phemex         | PMX  |  | ✓ | ✓ |                                             |                                          |
| Poloniex       | POL  | [poloniex.gs](https://github.com/moosylog/exchange_collectors/blob/master/poloniex.gs) | ✓ |  | [v1](https://docs.poloniex.com)                              | HMACSHA512HEX                            |
| Probit         | PRB  |  | ✓ | ✓ |                                             |                                          |
| SimpleFX       | SMP  |  | ✓ | ✓ |                                             | Barrier Token |
| Redot          |     |                                                              |      |      | [v1](https://docs.redot.com/?shell#message-structure)        | [Fin FIX API](https://globitex.com/api/) |
| Ukex           |     |            |      |      | [v?](https://www.ukex.com/en-us/article/api)                 | HMACSHA512???                            |
| Upbit          | UPB  |  | ✓ |  |                                             |                                          |
| Vinex Network  | VNX  |  | ✓ |  |                                             |                                          |
| Yobit          | YBT  |  | ✓ |  |                                             |                                          |
| Zerohash       | ZHS  |  | ✓ | ✓ | [v1](https://zerohash.com/api/web/)                          | HMACSHA256B64                            |

***
feedback or requests: moosylog@gmail.com

If you don't tell me, how can I know?
***

###### hmac sha cryptos cryptocurrency cryptocurrencies exchange sign sigature signing private request authentication authenticate google sheets google script javascript gas

*** Moosy Research: Cool Cryptocurrency Sheets ***
Because nothing is as flexible and easy to work with as a spreadsheet!



