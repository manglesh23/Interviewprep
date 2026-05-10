let a = [1, -2, 3, 4, -5, -4, 1];
const getFirstMissingPositive = (a) => {
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      [a[i], a[j]] = [a[j], a[i]];
      j++;
    }
  }
  console.log(a, j);
  for(let i=0;i<j;i++){
    let index= Math.abs(a[i])-1;
    if(a[index]>0){
        a[index]=-a[index];
    }
  }
  console.log(a);
  for(let i=0;i<j;i++){
    if(a[i]>0){
        console.log(i+1);
    }
  }
};

getFirstMissingPositive(a);
