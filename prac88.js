const a=[2,1,4,3,6,7,0,9,8,6];

const findtriplet=(a,target)=>{
    a.sort();
    let count=0;
    for(let i=0;i<a.length;i++){
        let j=i+1;
        let k=a.length-1;
        while(j<k){
            if(a[i]+a[j]+a[k]===target){
                console.log(a[i],a[j],a[k]);
                j++;
                k--;
                count++;
            }else if(a[i]+a[j]+a[k]<target){
                j++;
            }else{
                k--;
            }
        }
    }
    console.log(count);
}

findtriplet(a,15);