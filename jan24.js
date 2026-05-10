const a=[1,2,3];

const getAllSubset=(a)=>{
    let subsArray=[];
    for(let i=0;i<a.length;i++){
        let j=i+1;
        while(j<a.length){
            subsArray.push(a.slice(i,j+1));
            j++;
        }
    }
    console.log(subsArray);
}

getAllSubset(a);