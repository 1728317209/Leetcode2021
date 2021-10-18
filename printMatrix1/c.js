function printMatrix(matrix) {
  const result = [];

  const m = matrix[0].length;
  const n = matrix.length;

  for (let i = 0; i < m + n; i += 1) {
    for (let row = 0; row < n; row += 1) {
      const col = i - row;
      if (col >= 0 && col < m) {
        result.push(matrix[row][col]);
      }
    }
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
