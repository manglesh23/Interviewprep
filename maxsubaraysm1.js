const a=[1,3,-2,5,8,-9,6];

const maxsum=(a)=>{
    let maxsum=0;
    let maxcurrsum=a[0];
    let start=0;
    let end=0;
    let temp=0;
    for(let i=1;i<a.length;i++){
        if(a[i]>maxcurrsum+a[i]){
            maxcurrsum=a[i];
            temp=i;
        }else{
            maxcurrsum+=a[i];
        }
        if(maxcurrsum>maxsum){
            maxsum=maxcurrsum;
            end=i;
            start=temp;
        }
    }
    console.log(maxsum,start,end);
}

maxsum(a);