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

  moveZero() {
    console.log("move zero");
    let current = this.head;
    let prev = this.head;
    let newnode = this.head;
    while (current.data === 0) {
      prev = current;
      current = current.next;
    }

    while (current) {
      if (current.data === 0) {
        let temp = current.next;
        prev.next = current.next;
        current.next = newnode;
        newnode = current;
        current = temp;
      } else {
        prev = current;
        current = current.next;
      }
    }
    console.log("done");
    this.head = newnode;
  }
}

let list = new LinkedList();
list.append(4);
list.append(0);
list.append(0);
list.append(1);
list.append(0);
list.append(9);
list.append(7);
list.append(0);
list.append(89);
list.append(0);
list.print();
list.moveZero();
list.print();
