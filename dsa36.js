class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const createList=(a)=>{
    let head= new Node(a[0]);
    head.next=null;
    let i=1;
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

const reverse=(head)=>{
     let prev=null;
     let curr=head;
     let next=null;
     while(curr){
      next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;

     }
     return prev;
}

let list= createList([1,2,3,4,5,6]);
// console.log(list);
print(list);
let prev=reverse(list);
console.log("-------------------------------")
print(prev)