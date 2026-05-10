class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        let newNode= new Node(data);
        if(this.head===null){
            this.head=newNode;
            newNode.next=null;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    
}
function mergeList(list1,list2){
    let current1= list1.head;
    let current2= list2.head;
    let head=  current1;
    while(current1 && current2){
        let temp1= current1.next;
        let temp2=current2.next;
        current1.next=current2;
        current2.next=temp1;
        current1=temp1;
        current2=temp2;
    }
    return head;
}

function printList(head){
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

let list1= new LinkedList();
list1.append(4);
list1.append(3);
list1.append(2);
list1.append(1);

let list2= new LinkedList();
list2.append(9);
list2.append(8);
list2.append(7);
list2.append(6);
list1.print();
list2.print();
let head= mergeList(list1,list2);
console.log(head)
printList(head);