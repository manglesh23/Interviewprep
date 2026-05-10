const a=[2,1,6,5,8,9,7,10];

const thirdmax=(a)=>{
    let first=a[0];
    let second=a[0];
    let third=a[0];

    for(let i=1;i<a.length;i++){
        if(a[i]>first){
            third=second;
            second=first;
            first=a[i];
        }else if(a[i]<first && a[i]>second && a[i]>third){
            third=second;
            second=a[i];
        }else{
            third=a[i];
        }
    }
    console.log(third);
}
thirdmax(a);