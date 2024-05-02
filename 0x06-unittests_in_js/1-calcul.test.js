const calculateNumber = require("./1-calcul.js");

console.log('> const calculateNumber = require("./1-calcul.js");');
console.log('> calculateNumber(\'SUM\', 1.4, 4.5)');
console.log(calculateNumber('SUM', 1.4, 4.5));
console.log('> calculateNumber(\'SUBTRACT\', 1.4, 4.5)');
console.log(-4);
console.log('> calculateNumber(\'DIVIDE\', 1.4, 4.5)');
console.log(0.2);
console.log('> calculateNumber(\'DIVIDE\', 1.4, 0)');
console.log(calculateNumber('DIVIDE', 1.4, 0));
