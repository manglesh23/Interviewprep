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
    pairWiseSwap(){
        let current=this.head;
        let prev=null;
        let next=null;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next.next;
        }
        return prev;
    }
    reverse(head,k){
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
            head.next=this.reverse(next,k);
        }
        return prev;
    }

    reverseInGroup(k){
        this.head=this.reverse(this.head,k);
    }

    reverseIt(){
        let prev=null;
        let next=null;
        let current=this.head;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;
    }
}

let list=new LinekedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.print();
list.reverseIt();
list.print();
console.log("-----------------------")
// list.reverseInGroup(2);
// list.pairWiseSwap();
// list.print();