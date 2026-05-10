class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    append(data){
        let newNode= new Node(data);
        if(this.head===null){
            this.head=newNode;
            newNode.next=null;
        }else{
            newNode.next=this.head;
            this.head=newNode
        }
    }

    

}

function print(list){
    let current=list.head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

function reverse(head){
    let prev=null;
    let next=null;
    let current=head;
    while(current){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
     head= prev;
     return head;
}

function mergerList(firstHalf,secondHalf){
    console.log("merge");
    let head= firstHalf;
    let current1=firstHalf;
    let current2=secondHalf;
    while(current1  && current2){
        let temp1= current1.next;
        let temp2=current2.next;
        current1.next=current2;
        current2.next=temp1;
        current1=temp1;
        current2=temp2;
    }
    return head;
}

function rearrange(list){
    let slow= list.head;
    let fast=list.head;
    while(slow && fast && fast.next){
        fast=fast.next.next;
        slow=slow.next;
    }
    console.log("slow:-",slow.data);
    let secondHalf= slow.next;
    slow.next=null;
    console.log("reverse");
    secondHalf=reverse(secondHalf);
    console.log(secondHalf.data);
    let firstHalf= list.head;
    let mergeHead= mergerList(firstHalf,secondHalf);
    console.log("merge head:-",mergeHead)
    return mergeHead;
}

function printList(head){
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

let list= new LinkedList()
list.append(7);
list.append(6);
list.append(5);
list.append(4);
list.append(3);
list.append(2);
list.append(1);

print(list);

let head= rearrange(list);
printList(head);