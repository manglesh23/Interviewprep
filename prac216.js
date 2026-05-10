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
    
}

function unionOfLinkedList(list1,list2){
    let set= new Set();
    let current1=list1.head;
    let current2=list2.head;
    while(current1){
        set.add(current1.data);
        current1=current1.next;
    }
    while(current2){
        set.add(current2.data);
        current2=current2.next;
    }
    console.log("Set:-",set);
    let newHead=null;
    for(let i of set){
        let newNode= new Node(i);
        if(newHead===null){
            newHead=newNode;
            newNode.next=null;
        }else{
            newNode.next=newHead;
            newHead=newNode;
        }
    }
    return newHead;
}

function printList(head){
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

let list1= new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);
list1.append(6);
list1.append(7);
list1.append(8);
list1.append(9);
list1.print();

let list2= new LinkedList();
list2.append(7);
list2.append(8);
list2.append(9);
list2.append(0);
list2.append(1);
list2.append(0);
list2.append(10);
list2.print();
let unionlist=unionOfLinkedList(list1,list2);
console.log("union list:-",unionlist)
printList(unionlist);
