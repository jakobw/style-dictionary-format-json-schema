const styleDictionarySchema = require('./schema.json');

module.exports = function(dictionary) {
	styleDictionarySchema.definitions.reference.enum = dictionary.allProperties
		.map((property) => `{${property.path.join('.')}.value}`);

	return JSON.stringify(styleDictionarySchema);
}
