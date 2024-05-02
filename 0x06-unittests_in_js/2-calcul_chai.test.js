const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('adds two positive numbers', () => {
      expect(calculateNumber('SUM', 2.5, 3.7)).to.equal(6);
    });

    it('adds two negative numbers', () => {
      expect(calculateNumber('SUM', -2.5, -3.7)).to.equal(-6);
    });

    it('adds a positive and a negative number', () => {
      expect(calculateNumber('SUM', 2.5, -3.7)).to.equal(-1);
    });

    it('adds two numbers with different decimal places', () => {
      expect(calculateNumber('SUM', 2.25, 3.75)).to.equal(6);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('subtracts two positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.2, 2.8)).to.equal(2);
    });

    it('subtracts two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5.2, -2.8)).to.equal(-2);
    });

    it('subtracts a positive and a negative number', () => {
      expect(calculateNumber('SUBTRACT', 5.2, -2.8)).to.equal(8);
    });

    it('subtracts two numbers with different decimal places', () => {
      expect(calculateNumber('SUBTRACT', 5.25, 2.75)).to.equal(2);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('divides two positive numbers', () => {
      expect(calculateNumber('DIVIDE', 10.0, 2.0)).to.equal(5);
    });

    it('divides two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -10.0, -2.0)).to.equal(5);
    });

    it('divides a positive and a negative number', () => {
      expect(calculateNumber('DIVIDE', 10.0, -2.0)).to.equal(-5);
    });

    it('divides by zero', () => {
      expect(calculateNumber('DIVIDE', 10.0, 0.0)).to.equal('Error');
    });

    it('divides by a very small number', () => {
      expect(calculateNumber('DIVIDE', 10.0, 0.0001)).to.equal('Error');
    });
  });
});
