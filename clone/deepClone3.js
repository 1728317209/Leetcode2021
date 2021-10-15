function isObject(val) {
  return typeof val === 'object' && val !== null;
}

function deepClone(obj, map = new Map()) {
  if (!isObject(obj)) {
    throw new Error('obj is not a object');
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  Reflect.ownKeys(obj).forEach((key) => {
    const item = obj[key];
    if (isObject(item)) {
      result[key] = deepClone(item, map);
    } else {
      result[key] = item;
    }
  });
  return result;
}

const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2',
    },
  },
  field5: [1, 2, 3, { child: 'child' }],
  [Symbol('field6')]: { child: 'child' },
};

target.field7 = target;

console.log(deepClone(target));
