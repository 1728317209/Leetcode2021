function printMatrix(matrix) {
  const result = [];

  const m = matrix[0].length;
  const n = matrix.length;

  let i = 0; // [0, m)
  while (i < m + n) {
    let j = 0; // [0, n)
    while (j < n) {
      const row = j;
      const col = i - j;
      if (row >= 0 && row < n && col >= 0 && col < m) {
        result.push(matrix[j][i - j]);
      }
      j += 1;
    }
    i += 1;
  }

  return result;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
// output = 1, 2, 6, 3, 7, 11, 4, 8, 12, 5, 9, 13, 10, 14, 15

console.log(printMatrix(matrix).join(', '));
