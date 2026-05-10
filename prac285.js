const a=[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28];

const leastGreater=(a)=>{
    let res=[];
    // a.sort((a,b)=>a-b);
    // console.log(a);
    // for(let i=0;i<a.length;i++){
    //     let getLeast= binarySearch()
    // }
    for(let i=0;i<a.length-1;i++){
        let getLeast= binarySearch(a.slice(i,a.length+1),a[i]);
        // console.log(getLeast);
        res.push(getLeast);
    }
    console.log(res);
    // let getLeast= binarySearch(a,28);
    //     console.log(getLeast);
}

const binarySearch=(a,ele)=>{
    a.sort((a,b)=>a-b);
    let left=0;
    let right=a.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(a[mid]<=ele){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    // console.log(a[left]);
    // return a[left];
   return left < a.length ? a[left] : -1;
}
leastGreater(a);