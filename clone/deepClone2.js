function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function deepClone(obj) {
  if (isObject(obj)) {
    throw new TypeError('obj is not a object');
  }

  const result = Array.isArray(obj) ? [...obj] : { ...obj };
  Reflect.ownKeys(result).forEach((key) => {
    const item = obj[key];
    if (isObject(item)) {
      result[key] = deepClone(item);
    } else if (isFunction(item)) {
      result[key] = item;
    } else {
      result[key] = item;
    }
  });
}
