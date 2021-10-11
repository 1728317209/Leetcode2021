function carry(fn, ...args1) {
  function newFn(...args2) {
    return carry(fn, ...args1, ...args2);
  }
  newFn.toString = function toString() {
    return fn.apply(this, args1);
  };
  return newFn;
}

const add = carry((...nums) => {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
});

// console.log(add(1)(2)(3)(4));
console.log(add(1)(2)(3)(4).toString());
