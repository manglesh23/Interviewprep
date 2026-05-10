let a=[1,2,3,4,5,6,7];

const reverse=(a)=>{
    let left=0;
    let right=a.length-1;
    while(left<right){
        let temp=a[left];
        a[left]=a[right];
        a[right]=temp;
        left++;
        right--;
    }
    console.log(a);
}
reverse(a);