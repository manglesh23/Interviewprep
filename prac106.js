let count=0;
function greet() {
    console.log("Hello, world!");
    count++;
    if(count===5){

    clearInterval(intervalID);
    }
}

// Call `greet` every 2 seconds (2000 milliseconds)
let intervalID = setInterval(greet, 2000);
