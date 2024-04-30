import signUpUser from "../4-user-promise";

describe("signUpUser", () => {
	    test("should return a resolved promise with firstName and lastName", () => {
		            return expect(signUpUser("Bob", "Dylan")).resolves.toEqual({
				                firstName: "Bob",
				                lastName: "Dylan",
				            });
		        });
});
