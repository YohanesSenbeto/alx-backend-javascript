const calculateNumber = (type, a, b) => {
  const operations = {
    SUM: (a, b) => Math.round(a) + Math.round(b),
    SUBTRACT: (a, b) => Math.round(a) - Math.round(b),
    DIVIDE: (a, b) => {
      if (Math.round(b) === 0) return 'Error';
      return Math.round(a) / Math.round(b);
    }
  };

  return operations[type](a, b);
};

export default calculateNumber;
