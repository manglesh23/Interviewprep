class Stack{
    constructor(){
        this.items=[];
    }

    push(ele){
        this.items.push(ele);
    }

    pop(){
        if(this.items.length===0){
            return 0;
        }
       return this.items.pop();
    }
    peep(){
        if(this.items.length===0){
            return 0;
        }
        return this.items[this.items.length-1];
    }
}

let stack= new Stack();
stack.push(7);
stack.push(9);
stack.push(0);
stack.push(10);
let data= stack.pop();
console.log(data);