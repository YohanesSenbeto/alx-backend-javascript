import returnHowManyArguments from './4-rest-parameter';

test('returnHowManyArguments with one argument', () => {
	  expect(returnHowManyArguments("one")).toBe(1);
});

test('returnHowManyArguments with multiple arguments', () => {
	  expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
});

