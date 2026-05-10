class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
const createlist=(a)=>{
    let head= new Node(a[0]);
    let current=head;
    let i=1;
    while(i<a.length){
        current.next=new Node(a[i]);
        current=current.next;
        i++;
    }
    return head;
}

const printList=(head)=>{
    // console.log(head);
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

const reverseList=(head)=>{
    let current=head;
    let prev=null;
    let next=null;
    while(current){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
   return  head=prev;
}

const addAtfirst=(head)=>{
    let newNode=new Node(100);
    newNode.next=head;
    head=newNode;
    return head;
}




let list=createlist([1,2,3,4,5,6]);
console.log(list);
printList(list);
let head=addAtfirst(list);
printList(head);
let rev=reverseList(head)
console.log("----------------------");
printList(rev);