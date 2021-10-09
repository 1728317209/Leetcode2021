/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  if (n <= 0) {
    return [];
  }

  const result = [];
  function def(paths, left, right) {
    if (left > n || right > left) {
      return;
    }
    if (paths.length === n * 2) {
      result.push(paths);
      return;
    }
    def(`${paths}(`, left + 1, right);
    def(`${paths})`, left, right + 1);
  }
  def('', 0, 0);

  return result;
}
