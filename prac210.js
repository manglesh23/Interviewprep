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
}

function reverse(head) {
  let current = head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return (head = prev);
}

function sumOfTheList(list1, list2) {
  let head1 = list1.head;
  let head2 = list2.head;
  console.log("Data:-", head1.data, head2.data);
  head1 = reverse(head1);
  head2 = reverse(head2);
  console.log(head1, head2);

  let current1 = head1;
  let current2 = head2;
  let newNode = new Node(current1.data + current2.data);
  newNode.next=null;
  let carry = Math.floor(newNode.data / 10);
   newNode.data = newNode.data % 10;
   let head= newNode;
  current1 = current1.next;

  current2 = current2.next;
  let i=0;
  while (current1 || current2 || carry) {
    let value = current1? current1.data:0 +current2? current2.data:0 + carry;
    carry = Math.floor(value / 10);
    value = value % 10;
    let node = new Node(value);
    newNode.next = node;
    newNode = node;
    newNode.next=null;
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
    console.log(i);
    i++;
  }
  return head;
}

function printList(head){
    let current=head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();
let secondList = new LinkedList();
secondList.append(7);
secondList.append(8);
secondList.append(9);
console.log("second list");
secondList.print();
let sumList = sumOfTheList(list, secondList);
console.log("Sum list:-", sumList);
printList(sumList);
