const a=[1,2,3,-5,-1,6,-5,9];

const maxSum=(a)=>{
    let maxsofar=a[0];
    let maxcurrsum=a[0];
    for(let i=1;i<a.length;i++){
        maxcurrsum=Math.max(a[i],maxcurrsum+a[i]);
        if(maxcurrsum>maxsofar){
            maxsofar=maxcurrsum
        }
    }
    console.log(maxsofar);
}

maxSum(a);