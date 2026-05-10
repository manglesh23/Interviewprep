class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const createList=(a)=>{
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
    return prev;
}

let list= createList([1,2,3,4,5,6]);
// console.log(list.data);
// printList(list);  
let newhead=reverseList(list);
console.log("---------------");
printList(newhead);  