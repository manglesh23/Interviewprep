class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinekedList{
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
    makeString(){
        let str='';
        let current=this.head;
        while(current){
            str+=current.data.toString();
            current=current.next;
        }
        console.log("String:-",str)
        let newString= str.split('').reverse().join('');
        if(str===newString){
            console.log("pailandrom");
        }else{
            console.log("not");
        }
    }
}

let list= new LinekedList();
list.append(0);
list.append(1);
list.append(2);
list.append(1);
list.append(1);
list.print();
list.makeString();