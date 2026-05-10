class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null;
    }
    append(data){
        let newNode= new Node(data);
        if(!this.head){
            this.head=newNode;
            newNode.next=null;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next
        }
    }
}
let list= new Linkedlist();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();