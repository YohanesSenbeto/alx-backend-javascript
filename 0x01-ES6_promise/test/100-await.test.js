import asyncUploadUser from "../100-await";
import { uploadPhoto, createUser } from "../utils";

jest.mock("../utils", () => ({
	    uploadPhoto: jest.fn(),
	    createUser: jest.fn(),
}));

describe("asyncUploadUser", () => {
	    afterEach(() => {
		            jest.clearAllMocks();
		        });

	    test("should return an object with photo and user if both functions succeed", async () => {
		            const photoResponse = { status: 200, body: "photo-profile-1" };
		            const userResponse = { firstName: "Guillaume", lastName: "Salva" };

		            uploadPhoto.mockResolvedValue(photoResponse);
		            createUser.mockResolvedValue(userResponse);

		            const result = await asyncUploadUser();

		            expect(result).toEqual({ photo: photoResponse, user: userResponse });
		            expect(uploadPhoto).toHaveBeenCalled();
		            expect(createUser).toHaveBeenCalled();
		        });

	    test("should return an object with null photo and user if uploadPhoto fails", async () => {
		            const error = new Error("Error uploading photo");
		            uploadPhoto.mockRejectedValue(error);
		            createUser.mockResolvedValue({
				                firstName: "Guillaume",
				                lastName: "Salva",
				            });

		            const result = await asyncUploadUser();

		            expect(result).toEqual({ photo: null, user: null });
		            expect(uploadPhoto).toHaveBeenCalled();
		            expect(createUser).not.toHaveBeenCalled();
		        });

	    test("should return an object with null photo and user if createUser fails", async () => {
		            const photoResponse = { status: 200, body: "photo-profile-1" };
		            const error = new Error("Error creating user");
		            uploadPhoto.mockResolvedValue(photoResponse);
		            createUser.mockRejectedValue(error);

		            const result = await asyncUploadUser();

		            expect(result).toEqual({ photo: null, user: null });
		            expect(uploadPhoto).toHaveBeenCalled();
		            expect(createUser).toHaveBeenCalled();
		        });
});
