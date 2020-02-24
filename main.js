const Exchange = require('./exchange');

const initTWD = 10000, initUSD = 1000;
const exchange = new Exchange(initTWD, initUSD);
try {
    const usd = exchange.trade(6000, 'TfWD');
    console.log(usd);
}
catch(e) {
    console.log(e);
    process.exit(-1);
}
console.log(exchange.twdReserve, exchange.usdReserve);