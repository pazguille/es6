'use strict';

function extend(to, from) {
  for (let prop in from) {
    if (from[prop]) {
      to[prop] = from[prop];
    }
  }
  return to;
}

export default extend;