const a = [5, 2, 7, 11, 12];
const sum = 13;

const closeSum = (a, sum) => {
  let diff = Number.MAX_SAFE_INTEGER;
//   console.log(diff);
  a.sort((a, b) => a - b);
//   console.log(a);
let num1,num2,num3;
  for (let i = 0; i < a.length - 1; i++) {
    let j = i + 1;
    let k = a.length;
    while (j < k) {
      let mindiff = Math.abs(a[i] + a[j] + a[k] - sum);
      if (mindiff < diff) {
        diff = mindiff;
        num1=a[i];
        num2=a[j];
        num3=a[k];
      }
      if (a[i] + a[j] + a[k] < sum) {
        j++;
      } else {
        k--;
      }
    }
  }
  console.log(num1,num2,num3);
};

closeSum(a, sum);
