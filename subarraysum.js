const findsubarray = (a, target) => {
  let prefixsum = new Map();
  let currsum = 0;

  for (let i = 0; i < a.length; i++) {
    currsum += a[i];
    if (currsum === target) {
      return [0, i];
    }

    if (prefixsum.has(currsum - target)) {
      return [prefixsum.get(currsum - target) + 1, i];
    }
    if (!prefixsum.has(currsum));
    prefixsum.set(currsum, i);
  }
};
const a = [1, 2, -3, 7, 5];
let find = findsubarray(a, 0);
console.log(find);
