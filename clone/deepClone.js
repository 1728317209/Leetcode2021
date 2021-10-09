function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function isFunction(value) {
  return typeof value === 'function';
}

function deepClone(obj) {
  if (!isObject(obj)) {
    throw new Error('obj is not a object');
  }

  const result = Array.isArray(obj) ? [...obj] : { ...obj };
  // Reflect.ownKeys 可以遍历 symbol
  Reflect.ownKeys(obj).forEach((key) => {
    if (isObject(result[key])) {
      result[key] = deepClone(result[key]);
    } else if (isFunction(result[key])) {
      result[key] = obj[key]; // 函数没必要拷贝，用原函数就行
    } else {
      result[key] = obj[key];
    }
  });

  return result;
}
