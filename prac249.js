const a = [1, 2, 3, 6, 4, 5, 2, 3, 6];

const kSizedSubArray = (a, k) => {
  let sumMap = new Map();
  let currSum = 0;
  let j = 0;
  for (let i = 0; i < a.length; i++) {
      currSum+=a[i];
      j++;
      console.log("currsum:-",currSum)
      if(j===k){
        sumMap.set(i,currSum);
        j=0;
        currSum=0;
      }
  }
  console.log(sumMap);
//   console.log(sumMap.keys());
 console.log(sumMap.values());
 let max=0;

 for(let v of sumMap.values()){
     if(v>max){
        max=v;
     }
 }
 console.log("max:-",max)
};

kSizedSubArray(a, 3);
