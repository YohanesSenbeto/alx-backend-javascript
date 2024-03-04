import concatArrays from './5-spread-operator';

test('concatArrays concatenates arrays and string', () => {
	  expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
});
