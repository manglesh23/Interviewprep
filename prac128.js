let isfunctionCalled=false;

function callOnce(){
    if(isfunctionCalled){
        console.log("inside if")
        return;
    }
    isfunctionCalled=true;
    
    console.log("function called again");
}

callOnce();
callOnce();
callOnce();