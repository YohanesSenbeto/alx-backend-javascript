import getBudgetObject from './7-getBudgetObject';

test('getBudgetObject returns correct object', () => {
	  const expected = { income: 400, gdp: 700, capita: 900 };
	  expect(getBudgetObject(400, 700, 900)).toEqual(expected);
});

