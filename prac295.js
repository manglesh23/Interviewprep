const a = [12, -1, -7, 8, -15, 30, 16, 28]
const k = 3;

const firstNegative = (a, k) => {
  for (let i = 0; i <= a.length - k; i++) {
    let array = a.slice(i, i + k);
    console.log(array);
    let first = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] < 0 && first === 0) {
        console.log(array[j]);
        break;
      }
      if (j === array.length-1) {
        console.log(0);
      }
    }
  }
};

firstNegative(a, k);
