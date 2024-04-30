import handleProfileSignup from "../6-final-user";

jest.mock("../4-user-promise", () => ({
	    __esModule: true,
	    default: jest.fn(),
}));

jest.mock("../5-photo-reject", () => ({
	    __esModule: true,
	    default: jest.fn(),
}));

describe("handleProfileSignup", () => {
	    test("should handle profile signup with success and failure", async () => {
		            const firstName = "Bob";
		            const lastName = "Dylan";
		            const fileName = "bob_dylan.jpg";

		            const userResponse = { firstName, lastName };
		            const photoError = new Error(`${fileName} cannot be processed`);

		            const userPromise = Promise.resolve(userResponse);
		            const photoPromise = Promise.reject(photoError);

		            require("../4-user-promise").default.mockReturnValueOnce(userPromise);
		            require("../5-photo-reject").default.mockReturnValueOnce(photoPromise);

		            const result = await handleProfileSignup(firstName, lastName, fileName);

		            expect(result).toEqual([
				                { status: "fulfilled", value: userResponse },
				                { status: "rejected", value: photoError.message },
				            ]);
		        });
});
