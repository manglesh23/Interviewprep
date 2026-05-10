const a = [1, 2, 3, 1, 4, 5, 2, 3, 6];

const maxKsziedARray = (a, k) => {
  let stack = [];
//   let j = 0;
  for (let i = 0; i < a.length - k; i++) {
    stack.push(a[i]);
    let j = i;
    console.log("i+k:-", i + k);
    while (stack.length >= 0 && j <=i + k) {
      if (stack[stack.length - 1] < a[j]) {
        stack.pop();
        stack.push(a[j]);
        j++;
      } else {
        j++;
      }
    }
    console.log(j);
  }
  console.log(stack);
  //   console.log(stack);
};

maxKsziedARray(a, 3);
