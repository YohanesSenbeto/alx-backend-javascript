// taskBlock.test.js

import taskBlock from './taskBlock'; // Update the import path accordingly

describe('taskBlock function', () => {
	  test('should return [false, true] when passed false', () => {
		      expect(taskBlock(false)).toEqual([false, true]);
		    });

	  test('should return [true, false] when passed true', () => {
		      expect(taskBlock(true)).toEqual([true, false]);
		    });
});
