const a=[1,2,3,4,5,6,7];

const makesub=(a)=>{
    let size=2;
    for(let i=0;i<a.length;i+=size){
        console.log(a.slice(i,i+size));
    }
}
makesub(a);