/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let result = 0;

  let min = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > result) {
      result = prices[i] - min;
    }
  }

  return result;
}
