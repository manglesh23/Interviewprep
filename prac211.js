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
    reverse(head){
        let current=head;
        let prev= null;
        let next=null;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;
    }
    checkPailandrome(){
        let fast=this.head;
        let slow=this.head
        while(fast && fast.next && slow){
            fast=fast.next.next;
            slow=slow.next;
        }
        console.log(slow);
        let secondHalf= this.reverse(slow);
        console.log("Second Half:-",secondHalf);
        let firstHalf=this.head;
        while(secondHalf){
            if(secondHalf.data!==firstHalf.data){
                console.log("Not");
                return;
            }
            secondHalf=secondHalf.next;
            firstHalf=firstHalf.next;
        }
        console.log("pailan");
    }
}

let list= new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(2);
list.append(4);
list.print();
list.checkPailandrome();