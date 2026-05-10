class Node{
    constructor(data){
        this.data=data,
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
            this.head=newNode
        }else{
            let curr=this.head;
            while(curr.next!==null){
                curr=curr.next;
            }
            curr.next=newNode;
            newNode.next=null;
        }
    }

    prepend(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    printList(){
        let curr=this.head;
        while(curr!==null){
            console.log(curr.data);
            curr=curr.next;
        }
    }
    findMiddle(){
        let fast=this.head;
        let slow=this.head;
        while(fast!=null&& fast.next!==null){
            fast=fast.next.next;
            slow=slow.next;
        }
        // console.log("middle:-",slow.data,slow.next.data);
        
        let secondHead=slow.next;
        slow.next=null;
        console.log("midd:-",slow.data,slow.next);
        console.log(secondHead.data,secondHead.next.data)
        let next=null;
        let prev=null;
        let currNode= secondHead;
        while(currNode){
            next=currNode.next;
            currNode.next=prev;
            prev=currNode;
            currNode=next;
        }
        secondHead=prev;
        console.log("Second:-",secondHead.data);
        let head=this.head;
        while(secondHead){
            let temp1= head.next;
            let temp2=secondHead.next;
            head.next=secondHead;
            secondHead.next=temp1;
            head=temp1;
            secondHead=temp2;
        }
        // console.log(this.head.next.next.data)
        let node= this.head;
        while(node){
            console.log(node.data);
            node=node.next;
        }
    }
}

let list=new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(5);
list.printList();
list.findMiddle();