// 实现man.eat(1).firstSleep(5000).sleep(10000).eat(2); 5秒后打印1，10秒后再打印2.

class Man {
  tasks = [];

  running = false;

  eat(val) {
    this.pushTask((next) => {
      console.log('eat', val);
      next();
    });
    return this;
  }

  sleep(time) {
    this.pushTask((next) => {
      console.log('sleep start', time);
      setTimeout(() => {
        console.log('sleep end', time);
        next();
      }, time);
    });
    return this;
  }

  firstSleep(time) {
    this.unshiftTask((next) => {
      console.log('firstSleep start', time);
      setTimeout(() => {
        console.log('firstSleep end', time);
        next();
      }, time);
    });
    return this;
  }

  pushTask(task) {
    console.log('pushTask', task);
    this.tasks.push(task);
    Promise.resolve().then(() => this.run());
  }

  unshiftTask(task) {
    console.log('unshiftTask', task);
    this.tasks.unshift(task);
    Promise.resolve().then(() => this.run());
  }

  run() {
    if (!this.running && this.tasks.length > 0) {
      this.running = true;
      const task = this.tasks.shift();
      task(() => {
        this.running = false;
        this.run();
      });
    }
  }
}

const man = new Man();
man.eat(1).firstSleep(1000).sleep(2000).eat(2).firstSleep(1500);
