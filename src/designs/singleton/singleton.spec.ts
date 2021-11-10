import Logger from "./singleton";

describe('Singleton class "Logger"', () => {
	it("may have regular props", () => {
		expect(Logger.getProp).toBeDefined;
	});
});
