const numbers = [1, 2, 3];
const result = numbers.map(num => [num, num * 2]).flat()
console.log(result);