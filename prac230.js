class Stack{
    constructor(){
        this.items=[];
    }

    push(ele){
        this.items.push(ele);
    }
    pop(){
        if(this.isEmpty()===0){
            return 0;
        }
        return this.items.pop();
    }
    isEmpty(){
        if(this.items.length===0){
            return 0;
        }else{
            return 1;
        }
    }
    deleteMid(){
        let popedEle=[];
        let stackSize= this.items.length;
        let mid= Math.floor(stackSize+1)/2;
        // console.log("mid:-",mid);
        let eleRemove= this.items.length-mid;
        // console.log(eleRemove);
        for(let i=0;i<eleRemove;i++){
            let element= this.items.pop();
            popedEle.push(element);
        }
        // console.log("poped ele:-",popedEle);
        this.items.pop();
        for(let i=popedEle.length-1;i>=0;i--){
            this.items.push(popedEle[i]);
        }
        console.log("this item:-",this.items)
    }
}

let stack= new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
let res= stack.isEmpty();
// console.log("res:-",res);
stack.deleteMid();