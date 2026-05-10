class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}


const createList=(a)=>{
    let head= new Node(a[0]);
    let i=1;
    head.next=null;
    while(i<a.length){
        let newNode= new Node(a[i]);
        newNode.next=head;
        head=newNode;
        i++;
    }
    return head;
}

const print=(head)=>{
    let curr=head;
    while(curr){
        console.log(curr.data);
        curr=curr.next;
    }
}

const getMiddle=(head)=>{
    let curr=head;
    let fast=head;
    while(fast && fast.next){
        curr=curr.next;
        fast=fast.next.next
    }
    console.log(curr);
}

let list= createList([1,2,3,4,5,6,7,8,9]);
print(list);
getMiddle(list);

