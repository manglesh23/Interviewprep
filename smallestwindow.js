const str = "10212";

const smallestwindow = (str) => {
  let map = new Map();
  let start = 0;
  let minlength = str.length;
  let found=false;
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
    while (map.size === 3) {
        found=true;
      if (minlength > i - start + 1) {
        minlength = i - start + 1;
      }
      map.set(str[start], map.get(str[start]) - 1);

      if (map.get(str[start]) === 0) {
        map.delete(str[start]);
      }
      start++;
    }
  }
  if(found){
  console.log(minlength)
  }else{
    console.log(-1)
  }
};

smallestwindow(str)
