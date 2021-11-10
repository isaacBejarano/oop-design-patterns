class Logger {
	private static prop: any = "any prop";
	private static instance: Logger;

	private constructor() {}

	static getInstance(): Logger {
		if (!Logger.instance) Logger.instance = new Logger();

		return Logger.instance;
	}

	// getters
	static get getProp(): any {
		return Logger.prop;
	}
}

export default Logger;
