/**
 * fn 在某一段时间内连续触发只生效一次
 *
 * 如果可以执行，函数时立即执行的 不是异步执行的
 */
function throttle(fn, delay = 300) {
  let result;
  let valid = true;

  return function (...args) {
    if (valid) {
      result = fn.apply(this, args); // 执行函数

      valid = false; // 不能再执行了
      valid = setTimeout(() => {
        valid = true; // 一段时间之后恢复
      }, delay);
    }
    return result;
  };
}
