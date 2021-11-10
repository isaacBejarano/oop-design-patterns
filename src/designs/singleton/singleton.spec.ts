import Logger from "./singleton";

let s1: Logger, s2: Logger;

beforeEach(() => {
	s1 = Logger.getInstance();
	s2 = Logger.getInstance();
});

describe('Singleton class "Logger"', () => {
	it("may have regular props", () => {
		expect(Logger.getProp).toBeDefined;
	});

	it("must have only 1 instance", () => {
		expect<Logger>(s1).toBe<Logger>(s2);
	});

	it("is responsible of defining that instance", () => {
		expect<Logger>(s1).not.toBe(undefined);
	});
});
