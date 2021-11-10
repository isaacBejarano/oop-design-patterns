class Logger {
	private static prop: any;
	private static instance: Logger;

	constructor() {}

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
