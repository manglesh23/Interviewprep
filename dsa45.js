class Node{
    constructor(data){
        this.data=data,
        this.next=null;
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

const removenth=(head,n)=>{
    let slow=head;
    let fast=head;

    for(let i=0;i<=n;i++){
        fast=fast.next;
    }
    // console.log(fast.data);
    while(fast!==null){
        slow=slow.next;
        fast=fast.next;
    }
    // console.log(slow.data);
    slow.next=slow.next.next;
}

let list=createList([8,7,6,5,4,3,2,1]);
print(list);
removenth(list,3);
console.log("----------------------------------")
print(list)
