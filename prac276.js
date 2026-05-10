const a=[1,2,3,4,-2,12];

const equalSubArray=(a)=>{
    let fromstart=a[0];
    let fromLast=a[a.length-1];
    let i=1;
    let j=a.length-2;
    while(i<=j){
        if(fromLast===fromstart){
            fromstart+=a[i];
            i++;
            fromLast+=a[j]
            j--;
        }else if(fromstart<fromLast){
            fromstart+=a[i];
            i++;
        }else{
            fromLast+=a[j];
            j--;
        }
    }
    if(fromLast===fromstart){
        console.log("yes");
    }else{
        console.log("No");
    }
}

equalSubArray(a);