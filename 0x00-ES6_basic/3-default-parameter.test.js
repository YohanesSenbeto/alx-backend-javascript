import getSumOfHoods from './3-default-parameter';

test('getSumOfHoods without parameters', () => {
	  expect(getSumOfHoods(34)).toBe(142);
});

test('getSumOfHoods with 2 parameters', () => {
	  expect(getSumOfHoods(34, 3)).toBe(56);
});

test('getSumOfHoods with 3 parameters', () => {
	  expect(getSumOfHoods(34, 3, 4)).toBe(41);
});
