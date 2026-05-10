class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const createList=(a)=>{
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

const printList=(head)=>{
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

const reverse=(head,k)=>{
    let next=null;
    let prev=null;
    let current=head;
    let j=0;
    while(current && j<k){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
        j++;
    }
    if(next){
        head.next=reverse(next,k);
    }
    return prev;
}

const createNumber=(list)=>{
    let num=0;
    let current=list;
    let i=0;
    while(current){
        num+=current.data *Math.pow(10,i);
        current=current.next;
        i++;
    }
    return num;
}

let list= createList([1,2,3,4,5,6,7,8]);
printList(list);

let rev=reverse(list,3);
console.log("---------------------------------")
printList(rev);
console.log(createNumber(list));