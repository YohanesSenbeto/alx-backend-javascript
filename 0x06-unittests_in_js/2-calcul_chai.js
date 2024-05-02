export function calculateNumber(operation, num1, num2) {
  switch (operation) {
    case 'SUM':
      return num1 + num2;
    case 'SUBTRACT':
      return num1 - num2;
    case 'DIVIDE':
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    default:
      return 'Error';
  }
}
