let a=[1,2,5,3,7,6];

const maxContain=(a)=>{
    let left=0;
    let right=a.length-1;
    let maxArea=0;
    while(left<right){
        let width= right-left;
        let height= Math.min(a[left],a[right]);
        let area= width * height;
        maxArea=Math.max(maxArea,area);
        if(a[left]<a[right]){
            left++
        }else{
            right--
        }

    }
    console.log(maxArea)
}

maxContain(a);