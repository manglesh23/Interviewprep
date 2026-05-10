const a=[3,2,-1,5,-3,6,7,0,-7];

const maxsubarray=(a)=>{
    let maxsum=0;
    let start=0;
    let end=0;
    let temp=0;
    let currsum=a[0];

    for(let i=1;i<a.length;i++){
         currsum=currsum+a[i];
        if(currsum>maxsum){
            maxsum=currsum;
            start=temp;
            end=i;
        }

        if(a[i]>a[i]+currsum){
            currsum=a[i];
            temp=i;
        }
    }
    console.log(start,end,maxsum);
}

maxsubarray(a);