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

const swapNode=(head)=>{
    let curr=head;
    let dummy = new Node(0);
    dummy.next=head;
    let prev=dummy;
    while(curr && curr.next){
        let first=curr;
        let second=curr.next;
        first.next=second.next;
        second.next=first;
        prev.next=second;
        prev=first;
        curr=first.next;
    }
    return dummy.next;
}

let list= createList([1,2,3,4,5,6,7,8,9]);
// console.log(list);
print(list);

let swap=swapNode(list);
console.log("=--------------------------")
print(swap);