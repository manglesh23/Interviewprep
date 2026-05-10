const a=[1,5,3,8,9,6,0,-8,11];

const maxAndMin=(a)=>{
    let min= Number.MAX_SAFE_INTEGER;
    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<a.length;i++){
        if(a[i]>max){
            max=a[i]
        }
        if(a[i]<min){
            min=a[i];
        }
    }
    console.log(max,min);
}

maxAndMin(a);