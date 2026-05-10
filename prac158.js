const nums=[1,2,3,9,10];

const formlargestNumber=(nums)=>{
    nums=nums.map(String);
    console.log(nums);

    nums.sort((a,b)=>(b+a)-(a+b));

    console.log(nums.join(''));
}

formlargestNumber(nums);