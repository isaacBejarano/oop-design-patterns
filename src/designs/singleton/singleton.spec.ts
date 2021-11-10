import Logger from "./singleton";

describe('Singleton class "Logger"', () => {
	it("may have regular props", () => {
		expect(Logger.getProp).toBeDefined;
	});

	it("must have only 1 instance", () => {
		const s1 = Logger.getInstance;
		const s2 = Logger.getInstance;
		expect(s1).toEqual(s2);
	});
});
