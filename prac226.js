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
        let newNdoe= new Node(data);
        if(this.head===null){
            this.head=newNdoe;
            newNdoe.next=null;
        }else{
            newNdoe.next=this.head;
            this.head=newNdoe;
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

let list= new LinkedList();
list.append(2);
list.append(1);
list.append(8);
list.append(9);
list.print();