# Strike Pretest
Install
```
git clone https://github.com/CheshireCatNick/strike-pretest.git
cd strike-pretest
npm install
```

Usage
```javascript
// require node.js >= 12.4.0
const Exchange = require('./exchange');

const initTWD = 10000, initUSD = 1000;
const exchange = new Exchange(initTWD, initUSD);
try {
    const usd = exchange.trade(6000, 'TWD');
    console.log(usd);
}
catch(e) {
    console.log(e);
    process.exit(-1);
}
console.log(exchange.twdReserve, exchange.usdReserve);
```

Test
```
npm test
```
