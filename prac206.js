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
            this.head=newNode
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    reverse(){
        let current=this.head;
        let prev=null;
        let next=null;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }
    addOne(){
        // console.log(this.head);
        let current=this.head;
         current.data=current.data+1;
         let carry= current.data/10>=1?Math.floor(current.data/10):0;
         while(carry){
            current.data=current.data%10;
            current=current.next;
            current.data=current.data+carry;
            carry=current.data/10>=1?Math.floor(current.data/10):0;
         }
         console.log("Carry:-",carry)
    }
}

let list= new LinkedList();
list.append(9);
list.append(9);
list.append(9);
list.append(2);
list.append(1);
list.print();
list.reverse();
// list.print();
list.addOne();
console.log("-----------------------");
// list.print();
list.reverse();
list.print();