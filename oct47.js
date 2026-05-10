let a = [10, 5, 2, 6];
let k = 100;

const getProductLess = (a, k) => {
  let product = 1;
  let left = 0;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    product*=a[i];
    while (product >= k && left <= i) {
      product = product / a[left];
      left++;
    }
    count += i - left + 1;
  }
  console.log(count);
};

getProductLess(a, k);
