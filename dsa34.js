class Node {
  constructor(data) {
   this.data=data,
   this.next=null
  }
}

class Linkedlist{
    constructor(){
        this.head=null;
    }
    append(data){
        let node= new Node(data);
        if(!this.head){
            this.head=node;
            this.head.next=null;
        }else{
            node.next=this.head;
            this.head=node;
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
console.log(list)
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();

