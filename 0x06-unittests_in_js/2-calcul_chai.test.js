import chai from 'chai';
const expect = chai.expect;
import { calculateNumber } from './2-calcul_chai.js'; // added.js extension

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(5.9);
  });

  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-3.1);
  });

  it('should return the division of two numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.3111111111111111);
  });

  it('should return an error for division by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
