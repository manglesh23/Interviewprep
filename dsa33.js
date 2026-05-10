const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

const findSubArray = (nums, target) => {
  let start = 0;
  let currsum = nums[0];
  let minLength=nums.length;
  for (let i = 1; i < nums.length; i++) {
    currsum += nums[i];
    while (currsum > target) {
      currsum -= nums[start];
      start++;
    }
   

    if (currsum === target) {
      console.log("found", start, i);
      minLength=Math.min(minLength,i-start+1);
      console.log(minLength)
    }
   
  }
};

findSubArray(nums, target);
