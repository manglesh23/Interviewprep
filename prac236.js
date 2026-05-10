const a= [2,3,4,5,1];

const smallerOnLeft=(a)=>{
    let res=new Array(a.length).fill(-1);
    let stack=[];
    for(let i=0;i<a.length;i++){
        while(stack.length>0 && stack[stack.length-1]>=a[i]){
            stack.pop();
        }
        if(stack.length>0){
            res[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(res);
}

smallerOnLeft(a);
