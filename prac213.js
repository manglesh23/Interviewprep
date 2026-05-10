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
  oddAndEven() {
    let prev = null;
    let current = this.head;
    let last = this.head;
    while (last.next !== null) {
      last = last.next;
    }
    console.log("last:-", last);
    let endNode = last;

    while (current.data % 2 !== 0) {
      prev = current;
      current = current.next;
    }
    if(current!==this.head){
        last.next=this.head;
        last=prev;
        last.next=null;
        this.head=current;
    }
    console.log(prev);
    console.log("current:-", current.data);
    while (current !== endNode) {
      if (current.data % 2 !== 0) {
        let temp = current.next;
        prev.next = current.next;
        last.next = current;
        last=current;
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
list.append(10);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
// list.append(1);
// list.append(5);
// list.append(8);
list.print();
list.oddAndEven();
list.print();
