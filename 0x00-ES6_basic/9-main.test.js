import getFullBudgetObject from './9-getFullBudget';

test('getFullBudgetObject returns correct income in dollars', () => {
	  const fullBudget = getFullBudgetObject(20, 50, 10);
	  expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
});

test('getFullBudgetObject returns correct income in euros', () => {
	  const fullBudget = getFullBudgetObject(20, 50, 10);
	  expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
});

