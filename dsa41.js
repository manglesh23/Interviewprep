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

const rearrange=(head)=>{
    let odd=head;
    let even=head.next;
    let evenHead=even;

    while(even && even.next){
        odd.next=even.next;
        odd=odd.next;
        even.next=odd.next;
        even=even.next
    }
    odd.next=evenHead
    return head;
}

let list= createList([6,5,4,3,2,1]);
// print(list);
let newHead= rearrange(list);
print(newHead);