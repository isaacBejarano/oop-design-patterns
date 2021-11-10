import { Logger, SpecialLogger } from "./singleton";

let logger1: Logger, logger2: Logger, specialLogger1: SpecialLogger, specialLogger2: SpecialLogger;

beforeEach(() => {
	logger1 = Logger.getInstance();
	logger2 = Logger.getInstance();
	specialLogger1 = SpecialLogger.getInstance();
	specialLogger2 = SpecialLogger.getInstance();
});

describe('Singleton class "Logger"', () => {
	it("may have regular props", () => {
		expect(Logger.getProp).not.toBe(undefined);
	});

	it("is responsible of defining that instance", () => {
		expect<Logger>(logger1).not.toBe(undefined);
	});

	it("must have only 1 instance and 1 global access ['getInstance()'] to it", () => {
		expect(logger1).toBeInstanceOf(Logger);
		expect(logger2).toBeInstanceOf(Logger);
		expect<Logger>(logger1).toBe<Logger>(logger2);
	});

	it("disables other instantiations", () => {
		// make constructor protected (not prov ate) to allow inheritance => !new...
	});

	it("must be extensible through inheritance", () => {
		expect(SpecialLogger.getProp).not.toBe(undefined); // from Superclass
		expect(SpecialLogger.getOwnProp).not.toBe(undefined); // from Subclass
		expect(SpecialLogger.getProp).toBe(Logger.getProp); // inherited state

		expect(specialLogger1).toBeInstanceOf(Logger);
		expect(specialLogger2).toBeInstanceOf(Logger);

		expect<Logger>(specialLogger1).toBe<Logger>(specialLogger2);
	});
});
