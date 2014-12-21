'use strict';

/**
 * Extends a given object with properties from another object.
 * @param {Object} to - A given object to extend its properties.
 * @param {Object} from - A given object to share its properties.
 * @returns {Object} to
 * @example
 * var a = {
 *   'foo': 'bar'
 * };
 * var b = {
 *   'bar': 'foo'
 * };
 *
 * extend(a, b);
 *
 * console.log(a.bar) // returns 'foo'
 */
function extend(to, from) {
  for (let prop in from) {
    if (from[prop]) {
      to[prop] = from[prop];
    }
  }
  return to;
}

// Exports extend
export default extend;
