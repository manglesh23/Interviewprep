const digits=[3,2,9,0,10];

const largestNumber = digits
  .map(String)
  .sort((a, b) => (b + a) - (a + b))  
  .join('');


const result = largestNumber[0] === '0' ? '0' : largestNumber;

console.log("The largest number is:", result);
