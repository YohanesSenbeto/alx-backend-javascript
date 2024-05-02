const calculateNumber = (operation, a, b) => {
  const roundA = Math.round(a);
  const roundB = Math.round(b);

  switch (operation) {
    case 'ADD':
      return roundA + roundB;
    case 'SUBTRACT':
      return roundA - roundB;
    case 'DIVIDE':
      return roundB === 0? 'Error: Division by zero' : roundA / roundB;
    default:
      return 'Error: Invalid operation';
  }
};

module.exports = calculateNumber;
