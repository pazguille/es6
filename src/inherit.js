'use strict';

import extend from './src/extend';

function inherit(child, uber) {
  let obj = child.prototype || {};
  child.prototype = extend(obj, uber.prototype);
  return uber.prototype;
};

export default inherit;