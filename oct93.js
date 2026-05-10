let a=[1,2,1,3,2,5]

const getSingleElement=(a)=>{
    for(let i=0;i<a.length;i++){
        let index= Math.abs(a[i])-1;
        a[index]=-a[index];
    }
    for(let i=0;i<a.length;i++){
        if(a[i]<0){
            console.log(i+1)
        }
    }
    console.log(new Date(15684789367))
}
getSingleElement(a);