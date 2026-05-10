let a = [1, 2, 1, 4, 5,6];

const findMissingAndRepeating = (a) => {
  for (let i = 0; i < a.length; i++) {
    let val = Math.abs(a[i]);

    a[val - 1] = -a[val - 1];
  }
  console.log(a);
  for(let i=0;i<a.length;i++){
    if(a[i]>0){
        console.log(i+1);
    }
  }
};

findMissingAndRepeating(a);
