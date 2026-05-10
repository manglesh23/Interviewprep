function fetchData(num){
   return new Promise((resolve,reject)=>{
    if(num%2===0){
        resolve([1,2,4,6,8,9]);
    }else{
        reject("odd");
    }
   })
}

function processData(res){
    return res.filter(a=>a%2===0);
}

fetchData(78)
  .then((res) => processData(res))
  .then((response) => console.log(response))
  .catch((e) => console.log(e));
