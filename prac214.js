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

    deleteAlt(){
        let current=this.head;
       
        
        while(current && current.next){
            current.next = current.next.next; // Skip the next node
            current = current.next; // Mo
        }
    }
}

let list= new LinkedList();
list.append(6);
list.append(5);
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.print();
list.deleteAlt();
console.log("----------------------")
list.print();