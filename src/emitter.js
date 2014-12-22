'use strict';

class Emitter {

  constructor() {
    this._events = {};
  }

  on(event, listener) {
    this._events[event] = this._events[event] || [];
    this._events[event].push(listener);
  }

  once(event, listener) {
    let that = this;

    function fn() {
      that.off(event, fn);
      listener.apply(this, arguments);
    }

    fn.listener = listener;

    this.on(event, fn);
  }

  off(event, listener) {
   let listeners = this._events[event];

    if (listeners !== undefined) {
      for (let j = 0; j < listeners.length; j += 1) {
        if (listeners[j] === listener || listeners[j].listener === listener) {
          listeners.splice(j, 1);
          break;
        }
      }

      if (listeners.length === 0) {
        this.removeAllListeners(event);
      }
    }
  }

  removeAllListeners(event) {
    try {
      delete this._events[event];
    } catch(e) {};
  }

  listeners(event) {
    try {
      return this._events[event];
    } catch(e) {};
  }

  emit() {
   if (this._events === undefined) {
      return this;
    }

    let args = [].slice.call(arguments, 0); // converted to array
    let event = args.shift();
    let listeners = this._events[event];

    if (listeners) {
      listeners = listeners.slice(0);
      let len = listeners.length;
      for (let i = 0; i < len; i += 1) {
        listeners[i].apply(this, args);
      }
    }
  }

}

export default Emitter;
