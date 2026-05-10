const a=[1,2,3,4,5,6,7];
const reverse=(a)=>{
    let i=0;
    let j=a.length-1;
    while(i<j){
        [a[i],a[j]]=[a[j],a[i]];
        i++;
        j--;
    }
    console.log(a);
}
reverse(a);