const Exchange = require('../exchange');
const assert = require('assert');
const expect = require('chai').expect;

describe('Exchange(-100, -100)', function() {
    it('should throw NegativeReserve error', function() {
        expect(function() {
            const exchange = new Exchange(-100, -100);
        }).to.throw('NegativeReserve');
    });
});
describe('Exchange(10000, 1000)', function() {
    let exchange;

    beforeEach(() => {
        exchange = new Exchange(10000, 1000);
    })

    describe('trade(6000, "TWD")', function() {
        it('should return -375 with TWD reserve 16000 and USD reserve 625', 
            function() {
            expect(exchange.trade(6000, 'TWD')).to.equal(-375);
            expect(exchange.twdReserve).to.equal(16000);
            expect(exchange.usdReserve).to.equal(625);
        });
    });
    describe('trade(100, "BTC")', function() {
        it('should throw UnsupportedCurrency error', function() {
            expect(function() {
                exchange.trade(100, 'BTC');
            }).to.throw('UnsupportedCurrency');
        });
    });
    describe('trade(-100, "TWD")', function() {
        it('should throw NegativeAmount error', function() {
            expect(function() {
                exchange.trade(-100, 'TWD');
            }).to.throw('NegativeAmount');
        });
    });
    describe('trade("100", "TWD")', function() {
        it('should throw AmountNaN error', function() {
            expect(function() {
                exchange.trade('100', 'TWD');
            }).to.throw('AmountNaN');
        });
    });
    describe('trade(625, "USD")', function() {
        it.skip('should return -8000 with TWD reserve 8000 and USD reserve 1250',
            function() {
            // expect(exchange.trade(625, 'USD')).to.equal(-8000);
            // expect(exchange.twdReserve).to.equal(8000);
            // expect(exchange.usdReserve).to.equal(1250);
            expect(exchange.trade(600, 'USD')).to.equal(-3750);
            expect(exchange.twdReserve).to.equal(6250);
            expect(exchange.usdReserve).to.equal(1600);
        });
    });
});