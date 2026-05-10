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

  deleteNafterM() {
    let m = 2;
    let n = 1;
    let current = this.head;
    let prev = this.head;

    while (current!==null) {
      for (let i = 1; i < m && current.next !== null; i++) {
        current = current.next;
      }

      if (current === null) {
        return;
      }

      let temp = current;
      console.log("current data:-", current.data);
      for (let j =0; j < n && current.next !== null; j++) {
        current = current.next;
      }
      console.log("next:-", current.data);
      temp.next = current.next;
      current=current.next
    }
  }
}

let list = new LinkedList();
list.append(6);
list.append(5);
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.print();
list.deleteNafterM();
list.print();
