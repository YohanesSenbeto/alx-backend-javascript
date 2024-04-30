// constants.test.js

import { taskFirst, taskNext } from './home/joni/alx-backend-javascript/0x00-ES6_basic/0-Constants.js';
test('taskFirst returns the correct string', () => {
	  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext returns the correct string', () => {
	  expect(taskNext()).toBe('But sometimes let is okay');
});

