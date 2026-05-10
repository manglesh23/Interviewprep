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
        let newNode= new Node(a[i]);
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

const mergeList=(head1,head2)=>{
    let current1=head1;
    let current2=head2;
    let head;
    if(current1.data<current2.data){
        head=current1;
        current1=current1.next;
    }else{
        head=current2;
        current2=current2.next;
    }
    while(current1 && current2){
         let temp1=current1.next;
         let temp2=current2.next;
         if(current1.data<=current2.data){
            current1.next=current2;
            current1=temp1;
            current2=temp2;
         }else{
            current2.next=current1;
            current1=temp1;
            current2=temp2;
         }
    }
    return head;
}

let list1= createList([1,2,3,4,5]);
let list2= createList([0,1,6,7,8,9]);
// print(list1);
// print(list2);

let head=mergeList(list1,list2);
print(head);