const a=[1,2,3,6,7,8,11,67,78];

const binaryseacrh=(a)=>{
    let k=11;
    let l=0;
    let r=a.length-1;
    while(l<r){
        let mid=Math.floor((l+r)/2);
         console.log("working")
        if(k===a[mid]){
            console.log("found at",mid);
            return
        }else if(k>a[mid]){
          l=mid;
        }else{
            r=mid;
        }
    }
}

binaryseacrh(a);