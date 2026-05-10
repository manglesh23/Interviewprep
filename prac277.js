// const a=[1,3,2,5,4,0,7,4];
const a=[3,2,1];
const k=4;

const subArrayCount=(a,k)=>{
    let result=[];

    for(let i=0;i<a.length;i++){
        let max=a[i];
        for(let j=i;j<a.length;j++){
            if(max<a[j]){
                max=a[j];
            }
            if(max>k){
                result.push(a.slice(i,j+1));
            }
        }
    }
    console.log(result);
}
subArrayCount(a,0)