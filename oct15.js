let a=[3,2,4,6,5,8,7];

const nextGreterElement=(a)=>{
    let stack=[];
    let res=new Array(a.length).fill(-1);

    for(let i=a.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]>=a[i]){
            stack.pop();
        }
        if(stack.length){
            res[i]=stack[stack.length-1]
        }
        stack.push(a[i]);
    }
    console.log(res);
}

nextGreterElement(a);