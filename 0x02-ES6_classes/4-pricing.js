import Currency from "./3-currency.js";

export default class Pricing {
	    constructor(amount, currency) {
		            this._amount = amount;
		            this._currency = currency;
		        }

	    displayFullPrice() {
		            return `${this._amount} ${this._currency.name} (${this._currency.code})`;
		        }

	    static convertPrice(amount, conversionRate) {
		            return amount * conversionRate;
		        }
}
