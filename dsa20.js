const a = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const mergeIntervals = (a) => {
  let result = [a[0]];
  for (let i = 0; i < a.length - 1; i++) {
    let lastInt= result[result.length-1];
    if(lastInt[1]>a[i][0]){
        lastInt[1]=Math.max(lastInt[1],a[i][1]);
    }else{
        result.push(a[i]);
    }
  }
  console.log(result);
};
mergeIntervals(a);
