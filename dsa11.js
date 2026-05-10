const a=[1,2,3,4,5,6,7,10];

const swapElement=(a)=>{
    let i=0;
    let j=a.length-4;
    while(i<j){
        [a[i],a[j]]=[a[j],a[i]]
        i++;
        j--;
    }
    let start=0;
    let end=a.length-1;
    while(start<end){
        [a[start],a[end]]=[a[end],a[start]];
        start++;
        end--;
    }
    console.log(a);
    
}
swapElement(a);