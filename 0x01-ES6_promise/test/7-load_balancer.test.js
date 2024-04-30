import loadBalancer from "../7-load_balancer";

describe("loadBalancer", () => {
	    test("should return the value of the promise that resolves first", async () => {
		            const chinaDownload = new Promise((resolve) =>
				                setTimeout(resolve, 100, "China")
				            );
		            const USDownload = new Promise((resolve) =>
				                setTimeout(resolve, 200, "US")
				            );

		            await expect(loadBalancer(chinaDownload, USDownload)).resolves.toBe(
				                "China"
				            );
		        });
});
