# style-dictionary-format-json-schema
Generating a JSON schema describing the structure of your [Style Dictionary](https://amzn.github.io/style-dictionary/) files and including all style property names makes it possible for text editors to provide you with autocompletion. This is especially useful for [referencing properties](https://amzn.github.io/style-dictionary/#/properties?id=attribute-reference-alias) (e.g. something like `{background.color.progressive.default.value}`) which you would otherwise type by hand.

<img width="630" alt="Screenshot 2020-10-25 at 10 13 06" src="https://user-images.githubusercontent.com/453024/97115775-f00cc000-16f8-11eb-8ecf-a0fda653cac7.png">

## Installation

```
$ npm install --save-dev style-dictionary-format-json-schema
```

## Usage

Make sure you have [style-dictionary](https://github.com/amzn/style-dictionary#installation) installed and set up. You can register the JSON schema format via [`StyleDictionary.registerFormat`](https://amzn.github.io/style-dictionary/#/api?id=registerformat):

```js
StyleDictionary.registerFormat({
    name: 'jsonSchema',
    formatter: require('style-dictionary-format-json-schema'),
 })
 ```
 
 Then, you'll be able to use the new `jsonSchema` (or whatever name you gave it) format as you would any other Style Dictionary [format](https://amzn.github.io/style-dictionary/#/formats?id=formats).
 
 ## Configuring text editors to use the JSON schema
 
 Letting the text editor know which JSON files to apply the schema to requires some configuration.

### VS Code

VS Code has good [documentation](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings) on getting better editor support for JSON files and working with JSON schemas. TL;DR modify and copy the following into your JSON workspace settings:
```json
{
    "json.schemas": [
        {
            "fileMatch": [
                "path/to/your/properties/**/*.json"
            ],
            "url": "./path/to/your/schema.json"
        }
    ]
}
```

### JetBrains products
Go to Settings and navigate to `Languages & Frameworks` > `Schemas and DTDs` >  `JSON Schema Mappings`. There you'll be able to create a new mapping for your style property files with the newly generated schema.
