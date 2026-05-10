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

const swap=(a,b,head)=>{
    let prevA=null;
    let prevB=null;
    let curr=head;
    let node1=null;
    let node2=null;
    while(curr && curr.next){
        if(curr.next.data===a){
            prevA=curr;
            node1=curr.next;
        }
        if(curr.next.data===b){
            prevB=curr;
            node2=curr.next
        }
        curr=curr.next;
    }
    prevA.next=node2;
    prevB.next=node1;
    [node1.next,node2.next]=[node2.next,node1.next];
    // console.log(prevA.data,prevB.data);
    // let temp=prevA.next.data;
    // prevA.next.data=prevB.next.data;
    // prevB.next.data=temp;
}

let list= createList([7,6,5,4,3,2,1]);
print(list);

swap(3,6,list);
console.log("-------------------------------")
print(list);
