const a=[1,3,-2,-5,4-7,6,3];

const maxsub=(a)=>{
    let maxsum=0;
    let maxcurrsum=a[0];
    let temp=0;
    let start=0;
    let end=0;
    for(let i=1;i<a.length;i++){
        if(a[i]>a[i]+maxcurrsum){
            maxcurrsum=a[i];
            temp=i
        }else{
            maxcurrsum+=a[i];
        }

        if(maxcurrsum>maxsum){
            maxsum=maxcurrsum;
            end=i;
            start=temp;
        }

    }
    console.log(maxsum, start,end);
}

maxsub(a);