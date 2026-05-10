const fetchdata=async()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    // resolve([1,2,3,4,5])
    reject("Error")
   },2000)

   }) 
}


const getData= async()=>{
    try{
    let res= await fetchdata();
    console.log(res);
    }catch(e){
        console.error(e)
    }
    console.log("done");
}

getData();