const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        let data='';
        if(data){
            resolve(data)
        }else{
            reject("failed to load data");
        }
    })
}

fetchData().then((data)=>console.log(data)).catch(err=>console.log(err))