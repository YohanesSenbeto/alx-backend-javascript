import handleProfileSignup from '../3-all';
import { uploadPhoto, createUser } from '../utils';

jest.mock('../utils', () => ({
	  uploadPhoto: jest.fn(),
	  createUser: jest.fn(),
}));

describe('handleProfileSignup', () => {
	  afterEach(() => {
		      jest.clearAllMocks();
		    });

	  test('should handle successful profile signup', async () => {
		      const photoResponse = { status: 200, body: 'photo-profile-1' };
		      const userResponse = { firstName: 'Guillaume', lastName: 'Salva' };

		      uploadPhoto.mockResolvedValue(photoResponse);
		      createUser.mockResolvedValue(userResponse);

		      const consoleSpy = jest.spyOn(console, 'log');

		      await handleProfileSignup();

		      expect(consoleSpy).toHaveBeenCalledWith(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
		      expect(uploadPhoto).toHaveBeenCalled();
		      expect(createUser).toHaveBeenCalled();

		      consoleSpy.mockRestore();
		    });

	  test('should handle error during profile signup', async () => {
		      const error = new Error('Error signing up');
		      uploadPhoto.mockRejectedValue(error);
		      createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

		      const consoleErrorSpy = jest.spyOn(console, 'error');

		      await handleProfileSignup();

		      expect(consoleErrorSpy).toHaveBeenCalledWith('Signup system offline');
		      expect(uploadPhoto).toHaveBeenCalled();
		      expect(createUser).toHaveBeenCalled();

		      consoleErrorSpy.mockRestore();
		    });
});
