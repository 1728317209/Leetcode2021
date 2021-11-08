/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// 实现一个 LazyMan，按照以下方式调用时，得到相关输出：
// LazyMan('Hank');
// // Hi! This is Hank!
// LazyMan('Hank').sleep(10).eat('dinner');
// // Hi! This is Hank!
// // 等待10 秒..
// // Wake up after 10
// // Eat dinner~
// LazyMan('Hank').eat('dinner').eat('supper');
// // Hi This is Hank!
// // Eat dinner~
// // Eat supper~

class LazyMan {
  constructor() {
    console.log('Hi! This is Hank!');
  }

  _promise = null;

  _promises = new Set();

  sleep(time) {
    if (!this._promise) {
      this._promise = Promise.resolve();
    }
    const promise = this._promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time * 1000);
      });
    });

    this._promise = promise;
    this._promises.add(promise);

    promise.then(() => {
      if (promise.tasks) {
        promise.tasks.forEach((task) => task());
      }
      this._promise = null;
      this._promises.delete(promise);
    });

    return this;
  }

  eat(val) {
    if (!this._promise) {
      console.log(`Eat ${val} ~`);
      return this;
    }

    if (!this._promise.tasks) {
      this._promise.tasks = [];
    }
    this._promise.tasks.push(() => {
      console.log(`Eat ${val} ~`);
    });
    return this;
  }
}

new LazyMan('Hank').sleep(3).eat('dinner').sleep(3).eat('dinner');
// new LazyMan('Hank').eat('dinner').eat('supper');
