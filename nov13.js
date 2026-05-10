let nums=[1,2,3,5,0,0];
const increasingTriplet = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num;  
    //   console.log(first)        
    } else if (num <= second) {
      second = num;  
    //   console.log(second)       
    } else {
        console.log(first,second,num)
      return true;  
    }       
  }
console.log(first,second)
  return false;
};

console.log(increasingTriplet(nums))
