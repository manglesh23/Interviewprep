const a = [1, 0,1, 2, 3, 6, 7,8, 9,10];

const longestCon = (a) => {
  let maxlength = 0;
  for (let i = 0; i < a.length; i++) {
    let start = i;
    let j = i + 1;
    let temp = i;

    while (a[temp] === a[j]-1) {
      temp++;
      j++;
    }
    // maxlength = Math.max(maxlength, j - start + 1);
    // console.log(j,start);
    if(j-start>maxlength){
        maxlength=j-start;
        console.log(j,start);
    }
  }
  console.log(maxlength);
};
longestCon(a);
