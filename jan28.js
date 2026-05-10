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
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

const reverse=(head)=>{
    let next=null;
    let prev=null;
    let curr=head;
    while(curr){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    head=prev;
    return head;
}


const list= createlist([1,2,3,4,5]);
console.log(list);
printList(list);
let head=reverse(list)
printList(head)