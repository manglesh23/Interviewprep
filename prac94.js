const sum=(a,b)=>{
    return a*b;
}

const callsum=(callback)=>{
    console.log(callback(2,10));
}

callsum(sum);