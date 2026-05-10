const a=[1,4,2,5,7,9];

const nextgreat=(a)=>{
    let res=new Array(a.length).fill(-1);
    let stack=[];

    for(let i=a.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<a[i]){
            stack.pop();
        }
        if(stack.length>0 && stack[stack.length-1]>a[i]){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res);
}
nextgreat(a);