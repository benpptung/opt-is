'use strict';

const is = module.exports = function(shape) {

  var keys = [];
  if (Object(shape) === shape) {
    keys = Object.keys(shape);
  }

  return function validate(opt) {

    for(let i = 0, len = keys.length; i < len; ++i) {
      let prop = keys[i];
      let fn = shape[prop];
      let ok = fn(opt[prop]);

      if (!ok) {
        let err = new TypeError('invalid value of ' + prop);
        err.original = { value: opt[prop] };
        throw err;
      }
    }
  }
};

is.string = function(val) {
  return typeof val == 'string';
};

is.object = function(val) {
  return Object(val) === val;
};

is.func = function(val) {
  return typeof val == 'function';
};

is.number = function(val) {
  return typeof val == 'number';
};

is.uint = function(val) {
  return /^\d+$/.test(val);
};