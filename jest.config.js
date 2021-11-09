/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
	preset: "ts-jest",
	coverageReporters: [
		"text",
		// , "json"
	],
	testEnvironment: "node",
	coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
};
