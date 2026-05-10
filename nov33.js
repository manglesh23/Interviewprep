let a = [3,5,3,4];
let k = 3;

const getBoatToSave = (a, k) => {
  a.sort((a, b) => a - b);
  let left = 0;
  let right = a.length - 1;
  let count = 0;
  while (left <= right) {
    if (a[left] + a[right] > k) {
      count++;
      right--;
    } else {
      count++;
      left++;
      right--;
    }
  }
  console.log(count);
};
getBoatToSave(a, k);
