import handleProfileSignup from "../3-all";
import { uploadPhoto, createUser } from "../utils";
jest.mock("../utils", () => ({
	    uploadPhoto: jest.fn(),
	    createUser: jest.fn(),
}));

describe("handleProfileSignup", () => {
	    afterEach(() => {
		            jest.clearAllMocks();
		        });

	    test("should handle successful signup", async () => {
		            uploadPhoto.mockResolvedValue({ status: 200, body: "photo-profile-1" });
		            createUser.mockResolvedValue({
				                firstName: "Guillaume",
				                lastName: "Salva",
				            });

		            await expect(handleProfileSignup()).resolves.toBeUndefined();
		            expect(uploadPhoto).toHaveBeenCalledWith("photo-profile-1");
		            expect(createUser).toHaveBeenCalledWith("Guillaume", "Salva");
		        });

	    test("should handle signup error", async () => {
		            uploadPhoto.mockRejectedValue(new Error("Error uploading photo"));
		            createUser.mockResolvedValue({
				                firstName: "Guillaume",
				                lastName: "Salva",
				            });

		            await expect(handleProfileSignup()).rejects.toEqual(undefined);
		            expect(uploadPhoto).toHaveBeenCalledWith("photo-profile-1");
		            expect(createUser).not.toHaveBeenCalled();
		        });
});
