// 2-arrow.test.js
import getNeighborhoodsList from './2-arrow';

describe('getNeighborhoodsList', () => {
	  let neighborhoodsList;

	  beforeEach(() => {
		      neighborhoodsList = new getNeighborhoodsList();
		    });

	  test('addNeighborhood method adds a new neighborhood', () => {
		      const res = neighborhoodsList.addNeighborhood('Noe Valley');
		      expect(res).toEqual(['SOMA', 'Union Square', 'Noe Valley']);
		    });
});

