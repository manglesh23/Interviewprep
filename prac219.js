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

  findLoop() {
    let fast = this.head.next;
    let slow = this.head;
    let prev = null;
    while (fast && fast.next) {
      if (slow === fast) {
        // console.log(slow.data, fast.data);
        // console.log("prev:-",prev)
        let current = slow.next;
        while (current.next.data !== slow.data) {
            console.log(current.data)
          current = current.next;
        }
        console.log(current.data);
        current.next = null;
        console.log("loop");
        return;
      }
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log("no loop");
  }
}

let list = new LinkedList();
// list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
console.log("Head:-", list.head);
list.head.next.next.next.next.next = list.head.next.next;
console.log("1------>", list.head.next.next.next.next.next.data);
// console.log("2", list.head.next.next.data);
// list.print();
list.findLoop();
list.print();
