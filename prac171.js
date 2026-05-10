const a=[1,2,4,6];

const productofarray=(a)=>{
    let result= new Array(a.length).fill(1);
    let leftproduct=1;
    for(let i=0;i<a.length;i++){
       result[i]=leftproduct;
       leftproduct*=a[i];
    }

    let rightProduct=1;
    for(let i=a.length-1;i>=0;i--){
        result[i]*=rightProduct;
        rightProduct*=a[i];
    }
    console.log(result);
}

productofarray(a);