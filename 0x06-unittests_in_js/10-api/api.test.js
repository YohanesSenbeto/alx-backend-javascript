const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('should have the correct status code', function (done) {
    request('http://localhost:7865', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should have the correct result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should not have an incorrect result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.not.equal('Something else');
      done();
    });
  });
});

describe('Cart page', function () {
  it('should have the correct status code when :id is a number', function (done) {
    request('http://localhost:7865/cart/12', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should have the correct status code when :id is NOT a number (=> 404)', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', function () {
  it('should have the correct result', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login page', function () {
  it('should have the correct result', function (done) {
    request.post('http://localhost:7865/login', {
      json: true,
      body: { userName: 'Betty' }
    }, function (error, response, body) {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
