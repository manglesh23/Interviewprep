let a = [1, 2, 0, 8, 4, 7, 9];

const nextgreaterelement = (a) => {
  let stack = [];
  let n = a.length;
  let result = new Array(n).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length-1];
    }
    stack.push(a[i]);
  }
  return result;
};

console.log(nextgreaterelement(a));
