class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return 0;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  checkParanthis() {
    let s = ")())()";
    let matchingPair = {
      ")": "(",
      "}": "{",
      "]": "[",
    }
    // console.log("macth:-",matchingPair[")"])
     let count=0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        this.items.push(s[i]);
      } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
        if (
          this.items.length === 0 ||
          this.items[this.items.length - 1] !== matchingPair[s[i]]
        ) {
          console.log("mismatach");
          // return false;
          // break;
        } else {
          this.items.pop();
          count+=2;
        }
      }
    }
    console.log("Count:-",count)
    console.log(this.items);
    if(this.items.length!==0){
        return false;
    }
    return true;
  }
}

let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
let res=stack.checkParanthis();
console.log(res);
// console.log(stack);
