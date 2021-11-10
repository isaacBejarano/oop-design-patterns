import Logger from "./singleton";

let s1: Logger, s2: Logger;

beforeEach(() => {
	s1 = Logger.getInstance();
	s2 = Logger.getInstance();
});

describe('Singleton class "Logger"', () => {
	it("may have regular props", () => {
		expect(Logger.getProp).not.toBe(undefined);
	});

	it("is responsible of defining that instance", () => {
		expect<Logger>(s1).not.toBe(undefined);
	});

	it("must have only 1 instance and 1 global access ['getInstance()'] to it", () => {
		expect(s1).toBeInstanceOf(Logger);
		expect(s2).toBeInstanceOf(Logger);
		expect<Logger>(s1).toBe<Logger>(s2);
	});

	it("disables other instantiations", () => {
		// make constructor private or protected => !new...
	});

	it("must be extensible through inheritance", () => {
		expect(SpecialLogger.getProp).not.toBe(undefined); // from Superclass
		expect(SpecialLogger.ownProp).not.toBe(undefined); // from Subclass
	});
});
