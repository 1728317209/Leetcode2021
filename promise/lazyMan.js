// 实现man.eat(1).firstSleep(5000).sleep(10000).eat(2); 5秒后打印1，10秒后再打印2.

function isPromise(val) {
  return val && val instanceof Promise;
}

class Man {
  tasks = [];

  running = false;

  eat(val) {
    this.addTask(() => {
      console.log('Man -> eat -> val', val);
    });
    return this;
  }

  sleep(time) {
    this.addTask(() => {
      console.log('Man -> sleep -> start', time);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          console.log('Man -> sleep -> end', time);
        }, time);
      });
    });
    return this;
  }

  addTask(task) {
    this.tasks.push(task);
    this.run();
  }

  run() {
    if (this.running) {
      return;
    }
    if (this.tasks.length === 0) {
      return;
    }

    this.running = true;
    const task = this.tasks.shift();
    const ret = task();
    if (!isPromise(ret)) {
      this.running = false;
      this.run();
    } else {
      ret.finally(() => {
        this.running = false;
        this.run();
      });
    }
  }
}

const man = new Man();
man.eat(1).sleep(5000).sleep(10000).eat(2);
