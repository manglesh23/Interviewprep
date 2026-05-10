class Node{
    constructor(data){
        this.data=data;
        this.next=null
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
    printlist(){
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }
    reverse(){
        let next=null;
        let prev=null;
        let curr=this.head;
        while(curr){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }
}

let list=new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.printlist();
list.reverse();
list.printlist();