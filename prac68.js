// function showthis(){
//     console.log(this);
// }
this.name="manglsh";

 function showthis(){
    this.name="test"
    console.log("arrow:-",this);
}
const obj1={name:"jdfjd",showthis}
obj1.showthis();

const obj = {
    name: 'Alice',
    getName: function(){
      return this.name; // `this` doesn't refer to obj but the surrounding scope, typically global object
    }
  };
  let newObj={name:"manglesh"}
  console.log(obj.getName()); // undefined or error
  

