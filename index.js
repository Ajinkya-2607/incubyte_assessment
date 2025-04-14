// stringCalculator.js
function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith('//')) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]);
      numbers = numbers.slice(delimiterMatch[0].length);
    }
  }

  const numList = numbers.split(delimiter).map(Number);
  const negatives = numList.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return numList.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
