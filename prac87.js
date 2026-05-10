const a=[1,2,3,4,5,6];

const makesubarray=(a,size)=>{
       let temp=[];
       for(let i=0;i<a.length;i+=size){
             temp.push(a.slice(i,i+size));
       }
       console.log(temp);
}
makesubarray(a,5);