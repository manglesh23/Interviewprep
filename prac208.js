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
        let newNode=  new Node(data);
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
            current=current.next
        }
    }
    pairwiseswap(){
        let current=this.head;
        while(current && current.next){
            let temp=current.data;
            current.data=current.next.data;
            current.next.data=temp;
            current=current.next.next;
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
list.pairwiseswap();
console.log("-----------------");
list.print();
