let a = [1, 2, 3, 4, 0, -5,5, 6];

const getFirstMissingPositive = (a) => {
  let left = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      [a[i], a[left]] = [a[left], a[i]];
      left++;
    }
  }
  console.log(a, left);
  for (let i = 0; i <left; i++) {
    let index = Math.abs(a[i]) - 1;
    if (index < left && a[index] > 0) {
      a[index] = -a[index];
    }
  }
  console.log(a);
  for (let i = 0; i < left; i++) {
    if (a[i] > 0) {
      console.log(i + 1);
      return;
    }
  }
  console.log(left+1);
};

getFirstMissingPositive(a);
