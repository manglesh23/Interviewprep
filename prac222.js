class Stack{
    constructor(){
        this.items=[];
    }

    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.isEmpty()){
            return 0;
        }
        return this.items.pop();
    }

    isEmpty(){
        if(this.items.length===0){
            return 0;
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1];
        }
    }
}

let stack= new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop())
stack.push(7);
console.log("peek:-",stack.peek());