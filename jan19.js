const a=[1,2,3,4,5,6,7];

const size=2;

const createArray=(a,size)=>{
    let temp=[];
    for(let i=0;i<a.length;i+=size){
        temp.push(a.slice(i,i+size));
    }
    console.log(temp);
}
createArray(a,size);