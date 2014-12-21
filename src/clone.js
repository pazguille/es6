'use strict';

function clone(obj) {
  let copy = {};

  for (let prop in obj) {
    if (obj[prop]) {
      copy[prop] = obj[prop];
    }
  }

  return copy;
}

export default clone;