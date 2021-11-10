class Logger {
	private static prop: any;

	constructor() {}

	static get getProp(): any {
		return Logger.prop;
	}
}

export default Logger;
