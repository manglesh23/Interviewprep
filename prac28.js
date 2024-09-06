const a=[2,1,4,3,6,8,9,6];

const nextgret=(a)=>{
    let stack=[];
    let result= new Array(a.length).fill(-1);

    for(let i=a.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=a[i]){
            stack.pop();
        }
        if(stack.length>0){
            result[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    return result;
}

console.log(nextgret(a));