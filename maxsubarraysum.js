const a=[-2, 1, -3, 4, -1, 2, 1, -5, 4,5];

const maxsubarray=(a)=>{
    let maxsum=a[0];
    let maxcurrsum=a[0];
    let end=0;
    let start=0;
    let tempstart=0;
    for(let i=1;i<a.length;i++){
        if(a[i]>maxcurrsum+a[i]){
            maxcurrsum=a[i];
            tempstart=i;
        }else{
            maxcurrsum+=a[i];
        }

        if(maxcurrsum>maxsum){
            maxsum=maxcurrsum;
            end=i;
            start=tempstart;
        }
    }
    console.log(start,end,maxsum);
}

maxsubarray(a);