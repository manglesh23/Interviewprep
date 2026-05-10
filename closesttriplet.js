const a = [5, 2, 7, 5];
const sum = 13;

const closesetsum = (a, sum) => {
  let diff = Number.MAX_SAFE_INTEGER;
  a.sort((a, b) => a - b);

  for (let i = 0; i <= a.length - 2; i++) {
    let j = i + 1;
    let k = a.length - 1;
    while (j < k) {
      let mindiff = Math.abs(sum - (a[i] + a[j] + a[k]));
      if (mindiff < diff) {
        diff = mindiff;
      }
      if (a[i] + a[j] + a[k] < sum) {
        j++;
      } else {
        k--;
      }
    }
  }
  console.log(diff)
};

closesetsum(a,sum);
