"use strict"
let value=20;
const obj = {
    value: 10,
    regularFunction: function() {
      console.log(this.value); // 'this' refers to 'obj'
    },
   
    
     arrowFunction: () => {
      console.log(this.value); // 'this' refers to the global scope (or surrounding context), not 'obj'
    }
    
  };
  
  obj.regularFunction(); 
  obj.arrowFunction();   // Outputs: undefined (since 'this' is not 'obj')

  function newFuncton(){
    let value=90;
    console.log(this.value);
  }

  newFuncton();