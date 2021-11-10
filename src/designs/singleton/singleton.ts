class Logger {
	private static prop: any = "any prop";
	private static instance: Logger;

	protected constructor() {}

	static getInstance(): Logger {
		if (!Logger.instance) Logger.instance = new Logger();

		return Logger.instance;
	}

	// getters
	static get getProp(): any {
		return Logger.prop;
	}
}

class SpecialLogger extends Logger {
	private static ownProp: any = "another prop";

	// getters
	static get getOwnProp(): string {
		return SpecialLogger.ownProp;
	}
}

export { Logger, SpecialLogger };
