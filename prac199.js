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
    reverseGroup(head,k){
        let current=head;
        let prev=null;
        let next=null;
        let i=0;
        while(current && i<k){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
            i++;
        }
        if(next){
            head.next=this.reverseGroup(next,k);
        }
        return prev;
    }

    reverseInGroup(k){
        this.head=this.reverseGroup(this.head,k);
        return this.head;
    }
}

let list= new LinkedList();
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.print();
let revHead=list.reverseInGroup(2);
console.log("reverse Head:-",revHead)
list.print();