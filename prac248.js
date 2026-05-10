const a=[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28];

const nestGreater=(a)=>{
    let res= Array(a.length).fill(-1);
    let n= a.length;
    let stack=[];
    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<a[i]){
            stack.pop();
        }
        if(stack.length>0){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res);
}
nestGreater(a);
