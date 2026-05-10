class Stack{
    constructor(){
        this.items=[];
        this.minItems=[];
    }
    push(ele){
        this.items.push(ele);
        if(this.minItems.length===0 || ele<this.minItems[this.minItems.length-1]){
            this.minItems.push(ele);
        }
    }
    pop(){
        const poped= this.items.pop();
        if(poped===this.getMin()){
            this.minItems.pop();
        }
    }

    getMin(){
        return this.minItems[this.minItems.length-1];
    }
}

let minStack= new Stack();

minStack.push(2);
minStack.push(3);
minStack.push(1);
minStack.push(9);
minStack.pop();
minStack.pop();
console.log("stack:-",minStack.items)
let mini=minStack.getMin();
console.log("Min:-",mini);