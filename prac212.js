class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        let newNode= new Node(data);
        if(this.head===null){
            this.head=newNode;
            newNode.next=null;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

    findLoop(){
        let fast=this.head;
        let slow=this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next
            if(slow===fast){
                console.log("looop",slow);
                return
            }
        }
        console.log("no loop");
    }
}

let list= new LinkedList();
list.append(1);
list.append(4);
list.append(2);
list.append(3);
list.append(5);
list.append(6);
console.log("node data:-",list.head.next.next.next.next.next.data);
list.head.next.next.next.next.next.next=list.head.next.next.next;
console.log(list.head.next.next.next.next.next.next);
// list.print();
list.findLoop();