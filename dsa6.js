const a=[1,2,3,-4,6,-5,-7];

const moveallnegative=(a)=>{
    let positive=[];
    let negative=[];
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            positive.push(a[i]);
        }else{
            negative.push(a[i]);
        }
    }
    console.log([...positive,...negative]);
}
moveallnegative(a);