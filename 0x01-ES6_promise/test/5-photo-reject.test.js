import uploadPhoto from "../5-photo-reject";

describe("uploadPhoto", () => {
	    test("should return a rejected promise with error message", () => {
		            return expect(uploadPhoto("guillaume.jpg")).rejects.toThrow(
				                "guillaume.jpg cannot be processed"
				            );
		        });
});
