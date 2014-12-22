'use strict';

import clone from './src/clone';
import extend from './src/extend';
import Emitter from './src/emitter';

let obj = {
  'foo': 'bar'
};

let obj2 = {
  'bar': 'foo'
};

let cloned = clone(obj);
console.log(cloned);

let obj3 = clone(obj2);
extend(obj3, obj);
console.log(obj3);

var bus = new Emitter();

export {clone, extend, bus};