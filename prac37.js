const a=[1,2-3,-1,4,5,-6,7,8,9,-1];

const maxsubarray=(a)=>{
     let start=0;
     let temp=0;
     let end=0;
     let maxsum=0;
     let currsum=a[0];

     for(let i=1;i<a.length;i++){
        if(a[i]>currsum+a[i]){
            currsum=a[i];
            temp=i;
        }else{
            currsum+=a[i];
        }

        if(currsum>maxsum){
            maxsum=currsum;
            end=i;
            start=temp;
        }
     }
     console.log(start,end,maxsum)
    }

    maxsubarray(a);