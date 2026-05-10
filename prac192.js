class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const createList=(a)=>{
    let head=new Node(a[0]);
    head.next=null;
    let current=head;
    let i=1;
    while(i<a.length){
        let newNode=new Node(a[i]);
        current.next=newNode;
        newNode.next=null;
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

const deleteNode=(head,k)=>{
    let current=head;
    let prev=null;
    while(current.data!==k && current.next!==null){
        prev=current;
        current=current.next;
    }
    if(current.data===k){
        console.log("founnd");
        prev.next=current.next;
    }
    if(current.next===null){
        console.log("No Node");
        return;
    }
}

const addAt=(list,k)=>{
    let current=list;
    let i=0;
    let prev=null;
    while(current.next!==null && i<k){
        prev=current;
        current=current.next;
        i++;
    }
    console.log("data:-",current.data);
    let newNode=new Node(100);
    prev.next=newNode
    newNode.next=current;
}

const addAtfirst=(head,k)=>{
    let newnode= new Node(k);
    newnode.next=head;
    head=newnode;
    return head;
}

const addAtlast=(head,k)=>{
    let current=head;
    while(current.next!==null){
        current=current.next;
    }
    let newNode=new Node(k);
    current.next=newNode;
    newNode.next=null;
}

let list=createList([1,2,3,4,5,6,7]);
print(list);
deleteNode(list,4);
// print(list);
addAt(list,4);
let head=addAtfirst(list,78);
addAtlast(head,1001);
print(head)