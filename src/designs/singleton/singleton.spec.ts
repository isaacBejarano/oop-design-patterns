import Logger from "./singleton";

describe('Singleton class "Logger"', () => {
	it("may have regular props", () => {
		expect(Logger.getProp).toBeDefined;
	});

	it("must have only 1 instance", () => {
		let s1 = Logger.getInstance();
		let s2 = Logger.getInstance();
		expect<Logger>(s1).toBe<Logger>(s2);
	});

	it("is responsible of defining that instance", () => {
		let s1 = Logger.getInstance();
		// let s2 = Logger.getInstance();
		expect<Logger>(s1).not.toBe(undefined);
	});
});
