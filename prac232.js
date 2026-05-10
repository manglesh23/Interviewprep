class Stack{
    constructor(){
        this.items=[];
    }
    push(ele){
        this.items.push(ele);
    }
    pop(){
        this.items.pop();
    }
    isEmpty(){
        return this.items.length===0;
    }
}

let stack= new Stack();
stack.push(12);
stack.push(4);
stack.push(9);
console.log(stack)