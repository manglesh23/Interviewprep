let a=[4,3,2,7,8,2,3,1]

const getDuplicate=(a)=>{
    let res=[]
    for(let i=0;i<a.length;i++){
        let index= Math.abs(a[i])-1;
        if(a[index]<0){
            res.push(index+1)
        }else{
            a[index]=-a[index]
        }
    }
    console.log(res)
}

getDuplicate(a);