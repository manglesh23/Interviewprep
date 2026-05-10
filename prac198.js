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
    reverse(){
        let prev=null;
        let next=null;
        let current=this.head;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
       return this.head=prev
    }
}

let list=new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();
list.reverse();
list.print();