function fetchData(){
    return new Promise((resolve, reject) => {
        resolve("data recived");
    })
}

function fetchUser(text){
    return new Promise((resolve, reject) => {
        resolve(`${text} User recieved`);
    })
}

fetchData().then(response=>{
    console.log(response);
   return fetchUser(response);
}).then((res)=>{
   console.log(res);
}).catch(e=>{
    console.log(e);
})