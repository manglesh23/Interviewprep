class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


const add=(a)=>{
    let head= new Node(a[0]);
    for(let i=1;i<a.length;i++){
        let newNode= new Node(a[i]);
        newNode.next=head;
        head=newNode;
    }
    return head
}
const printList=(head)=>{
    let curr=head;
    while(curr){
        console.log(curr.data);
        curr=curr.next;
    }
}
const reverse=(head)=>{
    let prev=null;
    let next=null;
    let curr=head;
    while(curr ){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
}

const reverseIngroupK=(head,k)=>{
   let prev=null;
   let next=null;
   let curr=head;
   let count=0;
   while(curr && count<k){
    next=curr.next;
    curr.next=prev;
    prev=curr;
    curr=next;
    count++;
   }
   if(next){
    head.next=reverseIngroupK(next,k);
   }
   return prev;
}

const list= add([1,2,3,4,5,6]);
console.log(list);
printList(list)
console.log("------------------------")
let head=reverse(list);
// printList(head);
let revHead= reverseIngroupK(head,2);
printList(revHead)
