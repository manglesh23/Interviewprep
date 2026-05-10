let a=[1,3,2,5,4,7,6];

const getNextBig=(a)=>{
    let res= Array(a.length).fill(-1);
    // console.log(res)
    let stack=[];

    for(let i=a.length-1;i>=0;i--){
        if(stack.length && stack[stack.length-1]<=a[i]){
            stack.pop();
        }
        if(stack.length){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res);
}
getNextBig(a);