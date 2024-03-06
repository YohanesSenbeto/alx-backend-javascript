import guardrail from "../9-try";
import divideFunction from "../8-try";

describe("guardrail", () => {
	    test("should add the value returned by the mathFunction to the queue", () => {
		            const mathFunction = () => divideFunction(10, 2);
		            expect(guardrail(mathFunction)).toEqual([5, "Guardrail was processed"]);
		        });

	    test("should add the error message to the queue if an error occurs", () => {
		            const mathFunction = () => divideFunction(10, 0);
		            expect(guardrail(mathFunction)).toEqual([
				                "cannot divide by 0",
				                "Guardrail was processed",
				            ]);
		        });
});
