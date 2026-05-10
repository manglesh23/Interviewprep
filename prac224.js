class Stack{
    constructor(){
        this.items=[];
    }
    push(ele){
        this.items.push(ele);
    }
    pop(){
        if(this.isEmpty()){
            return 0;
        }
        this.items.pop();
    }
    isEmpty(){
        return this.items.length===0;
    }
}

let stack= new Stack();
stack.push(3);
stack.push(2);
stack.push(8);
console.log(stack.items);