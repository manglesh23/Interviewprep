let a=[1,3,2,4,6,5,8,9];

const nextgreate=(a)=>{
    let res= new Array(a.length).fill(-1);
    // console.log(res);
    let stack=[];
    stack.push(a[a.length-1]);
    for(let i=a.length-2;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=a[i]){
            stack.pop();
        }
        if(stack.length){
        res[i]=stack[stack.length-1];
        }
         stack.push(a[i]);
        
    }
    console.log(res);
}

nextgreate(a);