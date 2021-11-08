function curry(fn, ...args1) {
  function curried(...args2) {
    return curry(fn, ...args1, ...args2);
  }
  curried.toString = function toString() {
    return fn.apply(this, args1);
  };
  return curried;
}

function add(...nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
}

const carriedAdd = curry(add);

console.log(carriedAdd(1, 2)(3, 4));
console.log(carriedAdd(1, 2)(3, 4).toString());
