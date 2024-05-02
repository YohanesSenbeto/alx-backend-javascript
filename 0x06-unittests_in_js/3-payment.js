export class Utils {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return a + b;
    } else {
      throw new Error('Invalid type');
    }
  }
}
