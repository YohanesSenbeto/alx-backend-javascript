const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should test the result of getPaymentTokenFromAPI(true)', function (done) {
    getPaymentTokenFromAPI(true)
   .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });

  it('should test the result of getPaymentTokenFromAPI(false) with retries', function (done) {
    getPaymentTokenFromAPI(false)
   .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
   .catch(error => {
        expect(error).to.be.undefined;
        done();
      });
  });

  it('should test the result of getPaymentTokenFromAPI(false) with max retries exceeded', function (done) {
    getPaymentTokenFromAPI(false, 3)
   .then(response => {
        expect(response).to.be.undefined;
        done();
      })
   .catch(error => {
        expect(error).to.be.an.instanceof(Error);
        expect(error.message).to.equal('Failed to retrieve payment token');
        done();
      });
  });
});
