const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  if (process.env.NODE_ENV!== 'test') {
    console.log(`The total is: ${sum}`);
  }
};

module.exports = sendPaymentRequestToApi;
