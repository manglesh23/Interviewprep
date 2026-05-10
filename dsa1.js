const a=[1,2,3,4,5,6,7];

const reversearray=(a)=>{
    console.log(a);
    let i =0;
    let j= a.length-1;
    while(j>i){
        let temp= a[j];
        a[j]=a[i];
        a[i]=temp;
        j--;
        i++;
    }
    console.log(a);
}

reversearray(a);