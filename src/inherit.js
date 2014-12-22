'use strict';

import extend from './src/extend';

/**
 * Inherits prototype properties from `uber` into `child` constructor.
 * @param {Function} child - A given constructor function who inherits.
 * @param {Function} uber - A given constructor function to inherit.
 * @returns {Object}
 * @example
 * inherit(child, uber);
 */
function inherit(child, uber) {
  let obj = child.prototype || {};
  child.prototype = extend(obj, uber.prototype);
  return uber.prototype;
};

export default inherit;