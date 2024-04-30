import handleResponseFromAPI from "../2-then";

describe("handleResponseFromAPI", () => {
	    test("should handle resolved promise and log message", () => {
		            const promise = Promise.resolve();
		            const consoleSpy = jest.spyOn(console, "log");
		            handleResponseFromAPI(promise);
		            expect(consoleSpy).toHaveBeenCalledWith("Got a response from the API");
		            consoleSpy.mockRestore();
		        });

	    test("should handle rejected promise and log message", () => {
		            const promise = Promise.reject();
		            const consoleSpy = jest.spyOn(console, "log");
		            handleResponseFromAPI(promise);
		            expect(consoleSpy).toHaveBeenCalledWith("Got a response from the API");
		            consoleSpy.mockRestore();
		        });
});
