const a=[1,2,5,3,4,6,8,0,9];

const nextgreaterElement=(a)=>{
    let stack=new Array(a.length);
    let result= new Array(a.length).fill(-1);
    // console.log(result);
    stack[stack.length-1]=a[a.length-1];
    for(let i=a.length-2;i>=0;i--){
        while(stack.length>0 && a[i]>stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length>0){
            result[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log("Result:-",result)
}

nextgreaterElement(a);