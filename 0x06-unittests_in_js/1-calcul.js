function calculateNumber(type, a, b) {
  switch (type) {
    case 'SUM':
      return Math.round(a + b);
    case 'SUBTRACT':
      return Math.round(a - b);
    case 'DIVIDE':
      if (b === 0) {
        return 'Error';
      }
      return parseFloat((a / b).toFixed(1));
    default:
      throw new Error('Unknown operation');
  }
}

module.exports = calculateNumber;
