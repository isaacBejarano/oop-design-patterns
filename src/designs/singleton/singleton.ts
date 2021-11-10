class Logger {
	private static prop: any;
	private static instance: Logger = 0;

	constructor() {}

	static getInstance(): Logger {
		return Logger.instance;
	}

	// getters
	static get getProp(): any {
		return Logger.prop;
	}
}

export default Logger;
