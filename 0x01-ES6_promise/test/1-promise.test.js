import getFullResponseFromAPI from '../1-promise';

describe('getFullResponseFromAPI', () => {
	  test('should resolve with status 200 and body "Success"', () => {
		      return expect(getFullResponseFromAPI(true)).resolves.toEqual({
			            status: 200,
			            body: 'Success',
			          });
		    });

	  test('should reject with error message', () => {
		      return expect(getFullResponseFromAPI(false)).rejects.toThrow(
			            'The fake API is not working currently'
			          );
		    });
});
