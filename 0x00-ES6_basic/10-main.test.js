import appendToEachArrayValue from './10-loops';

test('appendToEachArrayValue appends correctly', () => {
	  const expected = ['correctly-appended', 'correctly-fixed', 'correctly-displayed'];
	  expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toEqual(expected);
});

