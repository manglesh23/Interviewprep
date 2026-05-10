const user={
name:"test",
age:"32",
get(){
    const nest=()=>{
        console.log(this);
    }
    nest();
}
}

user.get();