class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = null;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  rearrange() {
    let current = this.head;
    let prev = null;
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    console.log(last);
    let endNode=last;
    console.log(current);
    while(current.data%2===0 && current.next!==null){
        prev=current;
        current=current.next;
    }
    
    if(prev!==null){
    last.next=this.head;
    last=prev;
    this.head=current;
    prev=this.head;
    }

    while (current!==endNode) {
      // console.log("while")
      if (current.data % 2 === 0) {
        // console.log("if");
        let temp = current.next;
        prev.next = current.next;
        last.next = current;
        last = current;
        last.next = null;
        current = temp;
      } else {
        prev = current;
        current = current.next;
      }
    }
  }
}

let list = new LinkedList();
list.append(9);
list.append(0);
list.append(7);
list.append(8);
list.append(5);
list.append(2);
list.append(1);
list.append(4);
list.append(6);
list.append(8);
list.append(1);
list.print();
list.rearrange();
console.log(
  "-----------------------------------------------------------------------"
);
list.print();
