// 滴滴一面：

// 一面问的都特别基础，基本把点答出来了面试官就过了，当然核心还是要尽可能多讲。比如设计模式事实上我这边用的比较多的就装饰器，就详细讲了一下项目中的应用。讲了十分钟那面试官也就不继续问其他模式了。

// 1. new的实现

// 2. instanceof的实现

// 3. 常用设计模式

// 4. 数据类型有哪些？

// 5. 事件代理

// 6. 转为驼峰命名  "get-element-by-id" => "getElementById"
// 第二次考了，美团也考了这个。这次写出来了。
// function a(str) {
//   return str.replace(/-\w/g, function(v) {
//     return v.substring(1).toUpperCase();
//   })
// }

// 7 实现eventEmitter, 实现 on,emit方法，加分项 实现 off,once方法
// 没写once因为我都不知道这是啥，其他的都写了。用map存储函数数组即可。
// class EventEmitter {
//   constructor() {
//     this.map = new Map();
//   }

//   on(event, fn) {
//     if (!this.map.has(event)) {
//       this.map.set(event, [fn]);
//     } else {
//       const fnArr = this.map.get(event);
//       fnArr.push(fn);
//     }
//   }

//   emit(event) {
//     if (!this.map.has(event)) {
//       return;
//     }
//     const fnArr = this.map.get(event);
//     fnArr.forEach(fn => {
//       fn();
//     })
//   }

//   off(event, fn) {
//     if (!this.map.has(event)) {
//       return;
//     }
//     const fnArr = this.map.get(event);
//     let index = -1;
//     for (let i = 0; i < fnArr.length; i++) {
//       if (fnArr[i] === fn) {
//         index = i;
//         break;
//       }
//     }
//     fnArr.splice(index, 1);
//   }
// }

// 8 选择排序、快速排序、二分查找等基础排序及查找方法实现任意一个
// 写的快排，之前美团写了选择和归并
// 所有排序算法一般不会强求写哪种，还是建议把最常用的五种都掌握了——选择、冒泡、插入、快排、归并，特别是后两个涉及到递归，能加分
// 快排:
// function sort(arr) {
//   function KP(arr, l, r) {
//     if (l >= r) {
//       return;
//     }
//     const index =  getIndex(arr, l, r);
//     KP(arr, l, index - 1);
//     KP(arr, index, r);
//   }
//   KP(arr, 0, arr.length - 1);
//   return arr;
// }

// function getIndex(arr, l, r) {
//   let left = l, right = r;
//   const index = Math.floor((l + r) / 2);
//   while (left <= right) {
//     while (arr[left] < arr[index]) {
//       left++;
//     }
//     while (arr[right] > arr[index]) {
//       right--;
//     }
//     if (left <= right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]]
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// 9 手写debounce
// 写成了节流，debounce是节流来的。
// 就顺手两个都写了
// function throttle(fn, time) {
//   let isRunning = false;
//   return function(...args) {
//     if (isRunning) {
//       return;
//     }
//     isRunning = true;
//     fn.call(this, ...args);
//     setTimeout(() => {
//       isRunning = false;
//     }, time * 1000);
//   }
// }

// function debounce(fn, time) {
//   let t = null;
//   return function(...args) {
//     clearTimeout(t);
//     t = setTimeout(() => {
//       fn.call(null, ...args);
//     }, time * 1000);
//   }
// }

// 滴滴二面：
// 主要围绕项目，不虚。这次讲性能优化直接讲了快20分钟，有点爽。

// 两道手写题

// 1. 实现man.eat(1).firstSleep(5000).sleep(10000).eat(2); 5秒后打印1，10秒后再打印2.
// 这题有点难度，不过想出来了。这里要注意eat触发的函数调用其实在每个方法里都可以写

// class Man {
//   constructor() {
//     this.tasks = [];
//     this.isRunning = false;
//   }

//   runCurTask() {
//     if (this.tasks.length) {
//       const curTask = this.tasks.shift();
//       curTask().then(() => {
//         this.runCurTask();
//       });
//     } else {
//       this.isRunning = false;
//     }
//   }

//   eat(num) {
//     this.tasks.push(() => {
//       return Promise.resolve(num).then(res => {
//         console.log(res);
//       });
//     })
//     if (!this.isRunning) {
//       this.isRunning = true;
//       setTimeout(() => {
//         console.log(this.tasks);
//         this.runCurTask();
//       }, 0);
//     }
//     return this;
//   }

//   firstSleep(sleepTime) {
//     this.tasks.unshift(() => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve();
//         },  sleepTime);
//       });
//     })
//     return this;
//   }

//   sleep(sleepTime) {
//     this.tasks.push(() => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve();
//         },  sleepTime);
//       });
//     })
//     return this;
//   }
// }

// const man = new Man();
// man.eat(1).firstSleep(5000).sleep(10000).eat(2);

// 2. getElement找目标节点，其实就是递归遍历，和树一样。
// const a = { id: 1, children: [{ id: 2, children: [] }] };
// function getElementById1(node, id) {
//   if (node.id === id) {
//     return node;
//   }
//   let childrenList = (new Array(node.children.length)).fill(false);
//   node.children.forEach((item, index) => {
//     childrenList[index] = getElementById1(item, id);
//   })
//   for (let i = 0; i < childrenList.length; i++) {
//     if (childrenList[i] !== false) {
//       return childrenList[i];
//     }
//   }
//   return null;
// }

// function getElementById2(node, id) {
//   const nodeList = [node];
//   while (nodeList.length) {
//     const curNode = nodeList.shift();
//     if (curNode.id === id) {
//       return curNode;
//     }
//     curNode.children.forEach(item => {
//       nodeList.push(item);
//     })
//   }
//   return null;
// }
// console.log(getElementById1(a, 2));
// console.log(getElementById2(a, 2));

// 然后问了个组件通信，忘了发布订阅模式了。这个要记住，而且很有可能会考eventbus的实现

// 滴滴三面 ：
// 客服、中台。
// 进客服团队，做一些偏C端的内容，也有很多基建内容要做。

// C端B端都有
// 在意流程，在意标准。按照流程做事。

// 三面问的比较广，题目这块问的不多
// 题目：
// 1. 写一个调控器，可以控制红绿灯型号。每次可以给灯添加指令。调用指令后即可触发对应操作如变色。
