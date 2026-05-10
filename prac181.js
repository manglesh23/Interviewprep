// Node class representing each element in the list
class Node {
  constructor(data) {
    this.data = data; // Value of the node
    this.next = null; // Pointer to the next node
  }
}

// LinkedList class to manage the list
class LinkedList {
  constructor() {
    this.head = null; // Head pointer, points to the first node
  }

  // Add a node at the end of the list
  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  reverse() {
    let currnum = this.head;
    console.log(currnum.data);
    let prev = null;
    let next = null;
    while (currnum !== null) {
      next = currnum.next;
      currnum.next = prev;
      prev = currnum;
      currnum = next;
    }
    this.head = prev;
  }

  createNumber() {
    let curr = this.head;
    let num = 0;
    let i = 0;
    while (curr !== null) {
      num += curr.data *Math.pow (10 , i);
      console.log(num);
      i++;
      curr = curr.next;
    }
    console.log(num);
    num=String(num).split('').reverse().join('');
    console.log("Reverse:-",Number(num))
  }

  removeOneNode(value){
    let prev=null;
    let curr=this.head;
    while(curr.data!=value){
       prev=curr;
       curr=curr.next;
    }
    console.log(prev.data, curr.data);
    prev.next=curr.next;
  }
}

const list = new LinkedList();
const list1 = new LinkedList();
const list2 = new LinkedList();
list.append(10);
list.append(80);
list.append(20);
list.append(100);
list.prepend(5);
list.printList();
list.remove(10);
list.printList();
list.reverse();
list.printList();
list1.append(11);
list1.append(12);
list1.append(13);
list1.append(14);
list2.append(1);
list2.append(2);
list2.append(3);

// console.log(list.find(20));
// list1.printList();
list1.reverse();
// list1.printList();
list2.printList();
list2.createNumber();
list2.removeOneNode(2);
list2.printList();
