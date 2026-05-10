const a=[1,3,2,1,9,4,7,8];

const nextgreaterelement=(a)=>{
    let stack=[];
    let n=a.length;

    let result= new Array(n).fill(-1);

    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=a[i]){
            stack.pop();
        }
        if(stack.length>0){
            result[i]=stack[stack.length-1];
        }
        stack.push(a[i]);
    }
    console.log(result);
}

nextgreaterelement(a);