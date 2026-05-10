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
    while (current) {
      for (let i = 0; i < 2 && current!==null; i++) {
        prev = current;
        current = current.next;
      }
      if(!current){
        break;
      }
      let connect = prev;
      let tail = current;
      for (let j = 0; j < 3 && current!==null; j++) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      if (connect) {
        connect.next = prev;
      } else {
        this.head = prev;
      }
      tail.next = current;
      prev = tail;
    }
  }
}

let list = new LinkedList();
list.append(7);
list.append(6);
list.append(5);
list.append(4);
list.append(3);
list.append(2);
list.append(1);
list.print();
list.rearrange();
console.log("-------------------------------")
list.print();
