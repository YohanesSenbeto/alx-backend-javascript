const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a * 10) / 10;
  const roundedB = Math.round(b * 10) / 10;

  if (type === 'SUM') {
      return roundedA + roundedB;
  }

  if (type === 'SUBTRACT') {
      return roundedA - roundedB;
  }

  if (type === 'DIVIDE') {
      if (roundedB === 0) {
          return 'Error';
      }
      return roundedA / roundedB;
  }

  throw new Error('Invalid operation');
}

module.exports = calculateNumber;
