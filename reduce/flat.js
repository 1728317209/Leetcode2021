function flat(arr) {
  return arr.reduce((pre, cur) => {
    console.log('flat -> pre, cur', pre, cur);
    if (Array.isArray(cur)) {
      pre.push(...flat(cur));
    } else {
      pre.push(cur);
    }
    return pre;
  }, []);
}

const arr = [1, [2, [3, 4]]];
console.log(flat(arr)); // [1, 2, 3, 4]
