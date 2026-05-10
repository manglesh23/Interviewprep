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

    addAtlast(data){
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        let newNode= new Node(data);
        current.next=newNode;
        newNode.next=null;
    }
}

let list=  new LinkedList()
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.print();
list.addAtlast(90);
console.log("----------------------")
list.print();
