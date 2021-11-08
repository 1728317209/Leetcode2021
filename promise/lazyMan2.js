// 实现man.eat(1).firstSleep(5000).sleep(10000).eat(2); 5秒后打印1，10秒后再打印2.

class Man {
  tasks = [];

  running = false;

  eat(val) {
    this.addTask((next) => {
      console.log('eat', val);
      next();
    });
    return this;
  }

  sleep(time) {
    this.addTask((next) => {
      console.log('sleep start', time);
      setTimeout(() => {
        console.log('sleep end', time);
        next();
      }, time);
    });
    return this;
  }

  addTask(task) {
    this.tasks.push(task);
    this.run();
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
man.eat(1).sleep(1000).sleep(2000).eat(2);
