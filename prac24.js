const a=[1,1,1,2,2,3,3,4,5,6,6];

const removedup=(a)=>{
    let j=0;
    for(let i=1;i<a.length;i++){
        if(a[i]!==a[j]){
            j++;
            a[j]=a[i];
        }
    }
    console.log(j+1);
    return j+1;
}
let length=removedup(a);
console.log(a.slice(0,length));