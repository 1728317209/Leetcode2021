/**
 * 每次执行 fn，会把 fn 的可执行时间推迟一段时间
 *
 * 如果可以执行，函数时立即执行的 不是异步执行的
 */
function debounce(fn, delay = 300) {
  let result;
  let timerId = 0;

  return function (...args) {
    if (!timerId) {
      result = fn.apply(this, args);
    } else {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      timerId = 0;
    }, delay);
    return result;
  };
}
