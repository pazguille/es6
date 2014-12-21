'use strict';

 /**
  * Returns a shallow-copied clone of a given object.
  * @param {Object} obj - A given object to clone.
  * @returns {Object}
  * @example
  * clone(object);
  */
function clone(obj) {
  let copy = {};
  for (let prop in obj) {
    if (obj[prop]) {
      copy[prop] = obj[prop];
    }
  }
  return copy;
}

// Exports clone
export default clone;
