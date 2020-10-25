const formatJsonSchema = require('../index');

describe('style-dictionary-format-json-schema', () => {

	it('compiles a list of references including style property names from a style dictionary', () => {
		const dictionary = {
			allProperties: [
				{ path: [ 'color', 'red' ] },
				{ path: [ 'color', 'blue' ] },
				{ path: [ 'font', 'line-height', 'medium' ] },
			]
		};

		const schema = JSON.parse(formatJsonSchema(dictionary));
		expect(schema.definitions.reference.enum).toEqual([
			'{color.red.value}',
			'{color.blue.value}',
			'{font.line-height.medium.value}',
		]);
	});

	// TODO Figure out how to write an integration test for this. Creating a "dictionary" object by hand seems  brittle,
	//  although that's how style-dictionary tests their own formatters, too:
	// https://github.com/amzn/style-dictionary/blob/6f62c3ef7db744f3ea3955ec51deec7e63a53fc5/__tests__/formats/all.test.js#L27

	// Ideally I'd want to register the formatter with a real style-dictionary instance, let it read a JSON file
	// containing style properties, and then check that the property names make it into the resulting JSON schema.
	// https://amzn.github.io/style-dictionary/#/api?id=exportplatform looked promising but couldn't get it to do what
	// I wanted.

});
