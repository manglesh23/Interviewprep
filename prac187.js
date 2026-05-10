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
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            newNode.next=null;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }

    printList(){
        let current=this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }

    reverse(k){
        console.log("Heqad:-",this.head)
        let prev=null;
        let next=null;
        let count=0;
        let current=this.head;
        while(current && count<k){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
            count++;
        }
        if(next){
         this.head.next=this.reverse(k);
        }
       return  this.head=prev;
    }
    
}

const list=new LinkedList()
list.append(6);
list.append(5);
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.printList();
let rev=list.reverse(3);
console.log(rev)
list.printList();