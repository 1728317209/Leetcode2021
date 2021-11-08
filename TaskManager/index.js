/* eslint-disable no-undef */
class TaskManager {
  constructor(limit = Infinity) {
    this.limit = limit;
  }

  tasksInProgress = new Set();

  tasksWaiting = [];

  fetch(task) {
    this.tasksInProgress.add(task);
    const { url, data, resolve, reject } = task;
    window
      .fetch(url, data)
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this.tasksInProgress.delete(task);
        if (this.tasksWaiting.length > 0) {
          this.fetch(this.tasksWaiting.shift());
        }
      });
  }

  addTask(url, data) {
    const task = {
      url,
      data,
    };
    const promise = new Promise((resolve, reject) => {
      task.resolve = resolve;
      task.reject = reject;
    });

    if (this.tasksInProgress.size < this.limit) {
      this.fetch(task);
    } else {
      this.tasksWaiting.push(task);
    }

    return promise;
  }
}
