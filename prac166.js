const a=[1,2,4,3,6,5,9];

const nextgreat=(a)=>{
    let res= new Array(a.length).fill(-1);
    console.log(res);
    let stack=[];
    for(let i=a.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=a[i]){
            stack.pop();
        }
        if(stack.length>0){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res);
}

nextgreat(a);