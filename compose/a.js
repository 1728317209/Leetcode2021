function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

const add = (num) => num + 10;
const multiply = (num) => num * 2;
const foo = compose(multiply, add);
console.log(foo(5)); // 30
