// NOTE: UML class diagrams @png @60q @tiny

console.log("DESIGN PATTERNS"); // IMPLEMENTATION

import { Logger, SpecialLogger } from "./designs/singleton/singleton";

/* SINGLETON */

console.log("SINGLETON...");

// only 1 global access point
let l1 = Logger.getInstance();
let l2 = Logger.getInstance();
let sl1 = SpecialLogger.getInstance();
let sl2 = SpecialLogger.getInstance();

// only 1 instance
console.log(l1 === l2, l1 === sl1, l1 === sl2, l2 === sl1, l2 === sl2);

// own prop + inherited
console.log(SpecialLogger.getProp);
console.log(SpecialLogger.getOwnProp);

// dependency injecting & singletons
class Component {
	instance: Logger;
	name = "HomePage";

	constructor(l1: Logger) {
		this.instance = l1;
	}

	logDependencyInjection() {
		console.log(this.name + " injected...", this.instance);
	}
}

const c1 = new Component(Logger);
const c2 = new Component(SpecialLogger);

c1.logDependencyInjection();
c2.logDependencyInjection();
