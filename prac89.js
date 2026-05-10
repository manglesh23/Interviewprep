const str = "abcabcbbde";

const getlongestsbu = (str) => {
  let set = new Set();

  let left = 0;
  let maxlength=0;
  let sub='';
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    if(maxlength<i-left+1){
        maxlength=i-left+1;
        sub=str.slice(left,i+1);
    }
  }
  console.log(set);
  console.log(maxlength);
  console.log(sub);
};

getlongestsbu(str);
