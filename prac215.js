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
        let prev=null;
        let next=null;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;
    }
    rearrange(){
        let fast=this.head;
        let slow= this.head;
        while(fast && fast.next){
            fast=fast.next.next;
            slow=slow.next;
        }
        console.log("Slow:-",slow.data);
        let secondHalf= this.reverse(slow);
        console.log("Second half:-",secondHalf.data);
        let firstHalf= this.head;
        while(secondHalf){
          let temp1=firstHalf.next;
          let temp2= secondHalf.next;
          firstHalf.next=secondHalf;
          secondHalf.next=temp1;
          firstHalf=temp1;
          secondHalf=temp2;
        }
    }


}

let list= new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.print();
list.rearrange();
console.log("------------------------------------")
list.print();
