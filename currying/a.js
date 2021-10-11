function add(num1) {
  let sum = num1;

  const result = function (num2) {
    sum = num1 + num2;
    return add(sum);
  };

  result.toString = function () {
    return sum;
  };

  return result;
}

console.log(add(1)(2)(3)(4));
console.log(add(1)(2)(3)(4).toString());
