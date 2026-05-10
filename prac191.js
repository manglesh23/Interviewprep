class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

const createList=(a)=>{
    let head=new Node(a[0]);
    head.next=null;
    let current=head;
    let i=1;
    while(i<a.length){
        let newNode=new Node(a[i]);
        newNode.next=null;
        current.next=newNode;
        current=newNode;
        i++;
    }
    return head;
}

const print=(head)=>{
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

const reverse=(head,k)=>{
    let current=head;
    let prev=null;
    let next=null;
    let i=0;
    while(current&& i<k){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
        i++;
    }
    if(next){
        head.next=reverse(next,k);
    }
    return head=prev;
}

let list=createList([1,2,3,4,5,6]);

print(list);
let rev=reverse(list,3);
console.log("-----------------")
print(rev);