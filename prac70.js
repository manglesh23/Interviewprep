this.name="test";

const user={
    name:"manglesh",   //get this from the object
    age:"31",
    get:()=>{
        console.log(this.name);
    }

}
user.get();