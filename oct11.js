class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const createlist=(a)=>{
    let head= new Node(a[0]);
    let current=head;
    let i=1;
    while(i<a.length){
        current.next=new Node(a[i]);
        current=current.next;
        i++;
    }
    return head;
}
const printlist=(head)=>{
    let current=head;   

    while(current){
        console.log(current.data);
        current=current.next;
    }
}

const reverse=(head,k)=>{
    let next=null;
    let prev=null;
    let curr=head;
    let j=0;
    while(curr && j<k){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
        j++;
    }
    if(next){
        head.next=reverse(next,k);
    }
    return prev;
}
let list= createlist([1,2,0,4,5,6]);
printlist(list);

let newhead=reverse(list,3);
console.log("--------------");
printlist(newhead);