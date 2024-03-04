import getBudgetForCurrentYear from './8-getBudgetCurrentYear';

test('getBudgetForCurrentYear returns correct object', () => {
	  const expected = { 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 };
	  expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual(expected);
});

