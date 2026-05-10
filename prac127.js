function fetchData(num){
   return new Promise((resolve,reject)=>{
        let data=[];
        if(num%2===0){
           return resolve("Even")
        }else{
           return reject("Odd");
        }
    })
}

fetchData(78).then((data)=>{
   console.log(data);
}).catch((error)=>{
    console.log(error);
})