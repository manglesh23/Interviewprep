const str = "(())(";

const validsubstring = (str) => {
  let stack = [-1];
  let maxlength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxlength = Math.max(maxlength, i - stack[stack.length - 1]);
      }
    }
  }
  console.log(maxlength);
};

validsubstring(str);
