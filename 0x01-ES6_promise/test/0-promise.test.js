import getResponseFromAPI from '../0-promise';

describe('getResponseFromAPI', () => {
	  test('should return a Promise', () => {
		      const response = getResponseFromAPI();
		      expect(response).toBeInstanceOf(Promise);
		    });
});
