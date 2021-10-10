export default class EventEmitter {
  constructor(options = {}) {
    const { maxListenersLength = 10 } = options;
    this.maxListenersLength = maxListenersLength;
    this.listeners = {
      // play: [
      //   { listener: fn1, once: true },
      //   { listener: fn2, once: false },
      // ]
    };

    this.on('error', console.error); // 默认为 error 事件注册监听器，防止内部执行
  }

  on(name, listener) {
    if (typeof name !== 'string') {
      throw new Error('name is not a string');
    }
    if (typeof listener !== 'function') {
      throw new Error('listener is not a function');
    }
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    if (this.listeners[name].length >= this.maxListenersLength) {
      console.warn('listeners ');
    }
    this.listeners[name].push({ listener, once: false });
  }

  once(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push({ listener, once: true });
  }

  off(name, listener) {
    const listeners = this.listeners[name];
    if (!listeners) {
      return;
    }

    this.listeners[name] = listeners.filter(
      (item) => item.listener !== listener
    );
  }

  emit(name, params) {
    if (!this.listeners[name]) {
      return;
    }

    const newListeners = [];
    this.listeners[name].forEach(({ listener, once }) => {
      listener(params);
      if (!once) {
        newListeners.push({ listener, once: false });
      }
    });
    this.listeners[name] = newListeners;
  }
}
