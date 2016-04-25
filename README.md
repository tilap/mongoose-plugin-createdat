Mongoose plugin createdat [![NPM version][npm-image]][npm-url]
============================

Simple mongoose plugin to add a created_at property to your schema, set on object save at the first time.

## Install

```
npm install --save mongoose-plugin-createdat
```

## Usage

```
const Schema = require('mongoose').Schema;
const mongoosePluginCreatedAt = require('mongoose-plugin-createat');

let MySchema = new Schema({ ... });
MySchema.plugin(mongoosePluginCreatedAt);
```

## Options

Available options:
- ```index```: if you want to index the property
- ```name```: the name of the field - default is created_at

### Example

```
const Schema = require('mongoose').Schema;
const mongoosePluginCreatedAt = require('mongoose-plugin-createat');

let MySchema = new Schema({ ... });
MySchema.plugin(mongoosePluginCreatedAt, {
  index: true,
  name: 'created_at_custome_name',
});
```

## License

MIT


[npm-image]: https://img.shields.io/npm/v/mongoose-plugin-createdat.svg?style=flat
[npm-url]: https://npmjs.org/package/mongoose-plugin-createdat
