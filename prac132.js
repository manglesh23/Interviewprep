console.log("Start");

setTimeout(() => {
    console.log("Async operation: Timeout");
}, 0);  // Asynchronous: this goes to the event loop;

function fetchDatanew(num){
    return new Promise((resolve,reject)=>{
         let data=[];
         if(num%2===0){
            return resolve("Even")
         }else{
            return reject("Odd");
         }
     })
 }
 
 fetchDatanew(78).then((data)=>{
    console.log(data);
 }).catch((error)=>{
     console.log(error);
 })


const fetchData = new Promise((resolve, reject) => {
    resolve("data recived");
    // setTimeout(() => {
    //     resolve("Data received!");
    // }, 2000);
});

fetchData.then(response => {
    console.log(response);  // Output: "Data received!"
}).catch(error => {
    console.log(error);
});




console.log("End");
console.log("one more function");
