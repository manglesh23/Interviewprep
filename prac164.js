let value=20;
const obj = {
    value: 10,
    regularFunction: function() {
      console.log(this.value); // 'this' refers to 'obj'
    },
    newFuncton:function(){
    
  const   arrowFunction= () => {
      console.log(this.value); // 'this' refers to the global scope (or surrounding context), not 'obj'
    }
    arrowFunction();
}
  };
  
  obj.regularFunction(); 
  obj.newFuncton();   // Outputs: undefined (since 'this' is not 'obj')
  