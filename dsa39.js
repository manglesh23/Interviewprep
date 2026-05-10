class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}

const createlist=(a)=>{
    let head= new Node(a[0]);
    let i=1;
    head.next=null;
    while(i<a.length){
        let newnode= new Node(a[i]);
        newnode.next=head;
        head=newnode;
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

const deletenode=(n,head)=>{
    let i=0;
    let curr=head;
    while(i!=n){
        curr=curr.next;
        i++;
    }
    curr.next=curr.next.next;
}



const list= createlist([1,2,3,4,5,6,7,8]);
// console.log(list);
print(list);
deletenode(4,list);
console.log("--------------------------------------")
print(list);

