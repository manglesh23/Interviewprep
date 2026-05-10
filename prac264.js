const a=[1,2,-3,-4,3,-5,6,-7,8];

const rearrange=(a)=>{
    let result= Array(a.length);
    let left=0;
    let right=a.length-1;
    for(let i=0;i<a.length;i++){
        if(a[i]<0){
            result[left]=a[i];
            left++;
        }else{
            result[right]=a[i];
            right--
        }
    }
    let i=left;
    let j=a.length-1;
    while(i<j){
        [result[i],result[j]]=[result[j],result[i]];
        i++;
        j--;
    }
    console.log(result);
}

rearrange(a);