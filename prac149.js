const a=[1,2,3,4,5,6,7,8,9];

const rotate=(a,k)=>{
    reverse(a,0,a.length-1);
    // console.log(a);
    
    reverse(a,0,k-1);
    reverse(a,k,a.length-1);
    console.log(a);
}

const reverse=(a,left,right)=>{
    let temp;
    while(left<right){
        temp=a[left];
        a[left]=a[right];
        a[right]=temp;
        left++;
        right--;
    }
}

rotate(a,3);