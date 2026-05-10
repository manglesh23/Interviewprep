const a=[1,2,3,4,5,6,7,8,9,10];

const makepart=(a,size)=>{
    
    for(let i=0;i<a.length;i+=size){
         console.log(a.slice(i,i+size));
    }
}

makepart(a,3);