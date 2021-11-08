// 手写转换，{'a.b.c': 1}转换成对象形式

const a = {
  'a.b': [1, 2, 3],
  'd.e.f': {
    'g.h.i': 2,
  },
  'j.k.l': function f1() {},
};

const b = {
  a: {
    b: {
      c: 1,
    },
  },
};

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function fn(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    let temp;
    if (!isObject(obj[key])) {
      temp = obj[key];
    } else {
      temp = fn(obj[key]);
    }
    const arr = key.split('.');
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      temp = {
        [arr[i]]: temp,
      };
    }
    Object.assign(result, temp);
  });
  return result;
}

console.log(fn(a));
