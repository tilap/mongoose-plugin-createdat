module.exports = exports = (schema, { index = null, name = 'created_at' } = {}) => {
  let fieldProperties = {};
  fieldProperties[name] = Date;
  schema.add(fieldProperties);

  schema.pre('save', function (next) {
    if (!this[name]) this[name] = new Date;
    next();
  });

  if (index) {
    schema.path(name).index(index);
  }
};
