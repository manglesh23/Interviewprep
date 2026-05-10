const a=[1,2,-13,-14,-5,6,-7,9,10,11];

const maxsumsubarray=(a)=>{
     let maxsofar=a[0];
     let maxcurrsum=a[0];
     let start=0;
     let end=0;
     for(let i=1;i<a.length;i++){
        if(a[i]>maxcurrsum+a[i]){
            start=i;
            maxcurrsum=a[i];
        }else{
            maxcurrsum=maxcurrsum+a[i];
        }
        if(maxsofar<maxcurrsum){
            end=i;
            maxsofar=maxcurrsum;
        }
     }
     console.log(start,end,maxsofar); 
     console.log(a.slice(start,end+1));   
}
maxsumsubarray(a);