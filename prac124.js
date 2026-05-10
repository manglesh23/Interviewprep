console.log("1");

function newcode(){
    console.log("2");
    setTimeout(() => {
        console.log("Async operation: Timeout");
    }, 1000);  

}
newcode();
// Asynchronous: this goes to the event loop

setTimeout(()=>{
    console.log("second time out");
},0);

console.log("3");
