export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// Enforce a scope is always required
		'scope-empty': [2, 'never'],

		// Restrict scopes to the allowed list
		'scope-enum': [2, 'always', ['app', 'api', 'db']]
	}
};
