const a=[2,1,3,4,1,6,8,9,0];

const nextgret=(a)=>{
    const stack=[];
    let res= new Array(a.length).fill(-1);

    for(let i=a.length-1;i>=0;i--){
        while(stack[stack.length-1]<a[i] && stack.length>0){
            stack.pop();
        }
        if(stack[stack.length-1]>a[i]){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res);
}

nextgret(a);