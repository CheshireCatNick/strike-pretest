class Exchange {
    #usdReserve;
    #twdReserve;

    /**
     * trade: exchange currecy and update reserve
     * @param {int} amount: amount in TWD or USD
     * @param {string} currency: TWD or USD
     * @return {int}: traded amount in TWD or USD (nagative)
     */
    trade(amount, currency) {
        if (currency !== 'TWD' && currency !== 'USD') {
            throw new Error('UnsupportedCurrency');
        }
        if (typeof amount !== 'number') {
            throw new Error('AmountNaN');
        }
        if (amount < 0) {
            throw new Error('NegativeAmount');
        }
        if (amount === 0) {
            return 0;
        }
        if (currency === 'TWD') {
            const pay = this.#usdReserve * 
                (this.#twdReserve / (this.#twdReserve + amount) - 1);
            this.#twdReserve += amount;
            this.#usdReserve += pay;
            return pay;
        }
        else if (currency === 'USD') {
            const pay = this.#twdReserve * 
                (this.#usdReserve / (this.#usdReserve + amount) - 1);
            this.#usdReserve += amount;
            this.#twdReserve += pay;
            return pay;
        }
    }
    get twdReserve() {
        return this.#twdReserve;
    }
    get usdReserve() {
        return this.#usdReserve;
    }
    constructor(rT = 0, rU = 0) {
        this.#twdReserve = rT;
        this.#usdReserve = rU;
    }
}
module.exports = Exchange;