let a = [1, 0, 3, 2, 5, 1, 6];

const getIncreasingTrip = (a) => {
  let first = Infinity;
  let second = Infinity;

  for (let num of a) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      console.log(first, second, num);
    }
  }
};
getIncreasingTrip(a);
