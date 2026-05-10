const a=[2,3,1,4,5,6,7];

const twoclose=(a,target)=>{
    a.sort();
    let close=Number.MAX_SAFE_INTEGER;
    console.log(a);
    let i=0;
    let j=a.length-1;
    let v1=0;
    let v2=0;
    while(i<j){
        if(Math.abs(a[i]+a[j]-target)<close){
            close=Math.abs(a[i]+a[j]-target);
            v1=a[i];
            v2=a[j];
        }
        if(a[i]+a[j]<target){
            i++;
        }else{
            j--;
        }
    }

    console.log(v1,v2);

}

twoclose(a,14);