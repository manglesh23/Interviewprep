const a = [1, 4, 2, 4, 6, 5, 0, 9, 1];

const nextgret = (a) => {
  let stack = [];
  let res = new Array(a.length).fill(-1);

  for (let i = a.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
      stack.pop();
    }
    if (stack[stack.length - 1] > a[i]) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(a[i]);
  }
  console.log(res);
};

nextgret(a);
