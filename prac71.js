
this.name="hadh";
this.newname="newname";

const user={
    name:"manf",
    age:"21",
    childobj:{
        newname:"new",
        get(){
            console.log(this)
        }
    }
}

user.childobj.get();