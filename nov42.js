let a=[3,2,4,1,6,5,7];
7892449918
8310391577
const nextGreater=(a)=>{
    let res= new Array(a.length).fill(-1);
    let stack=[];
    for(let i=a.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]<=a[i]){
            stack.pop();
        }
        if(stack.length){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res)
}
nextGreater(a);