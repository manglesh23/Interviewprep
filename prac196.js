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

    reverse(head){
        let prev=null;
        let next=null;
        let current=head;
        while(current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;
    }

    isPailandrome(){
        let slow= this.head;
        let fast= this.head;
        console.log("1");
        while(slow && fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        console.log("2");

        let secondHalf= this.reverse(slow);
        let firstHalf= this.head;
        console.log("3");
        while(secondHalf){
            if(secondHalf.data!==firstHalf.data){
                console.log("Not");
                return;
            }
            secondHalf=secondHalf.next;
            firstHalf=firstHalf.next;
        }
        console.log("pailndrome")
        console.log("4");
    }
}

let list= new LinekedList();
list.append(2);
list.append(1);
list.append(2);
list.append(1);
list.append(0);
list.print();
list.isPailandrome();