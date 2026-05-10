let a=[1,-1,2,1,-2,4,1,-3,3];

let moveZeroes=(a)=>{
    let left=0;
    for(let right=0;right<a.length;right++){
        if(a[right]>0){
            [a[left],a[right]]=[a[right],a[left]];
            left++;
        }
 
    }
    console.log(a);
}
moveZeroes(a);