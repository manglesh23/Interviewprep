const a=[2,0,11,3,0];
const l=0;
const r=10;

const countSub=(a,l,r)=>{
    let subarray=[];
    let start=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>l && a[i]<r){
            subarray.push(a.slice(start,i+1));
        }else{
            start++;
            subarray.push(a.slice(start,i+1));
        }
    }
    console.log(subarray)
}
countSub(a,l,r);