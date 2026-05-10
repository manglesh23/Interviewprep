class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinekedList{
    constructor(){
        this.head=null;
    }

    append(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            newNode.next=null;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    printList(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    reverseInGroup(head,k){
        let prev=null;
        let next=null;
        let current=head;
        let i=0;
        while(current && i<k){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
            i++;
        }
        if(next){
            head.next=this.reverseInGroup(next,k);
        }
        return prev;
    }

    reverseGroup(k){
        this.head=this.reverseInGroup(this.head,k);
    }

    addAtposition(k){
        let i=1;
        let current=this.head;
        let prev=null;
        while(current && i<k){
            prev=current;
            current=current.next;
            i++;
        }
        let newNode= new Node(90);
        prev.next=newNode;
        newNode.next=current;
    }


}
let list=new LinekedList();
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.printList();
list.addAtposition(2);
list.printList();
list.reverseGroup(2);
console.log("---------------------------------");
list.printList();