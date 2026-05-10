const a=[1,3,4,2,2];

const findDuplicate=(a)=>{
    for(let i=0;i<a.length;i++){
        let val=Math.abs(a[i]);
        a[val-1]=-a[val-1];
    }
    console.log(a);
}
findDuplicate(a);