class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinekedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);
    let current = this.head;
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const mergeList = (list1, list2) => {
  console.log(list1.head.data);
  console.log(list2.head.data);
  let l1 = list1.head;
  let l2 = list2.head;
  let newhead;
  if (l1.data < l2.data) {
    newhead = new Node(l1.data);
    l1 = l1.next;
  } else {
    newhead = new Node(l2.data);
    l2 = l2.next;
  }
  // console.log("new head:-",newhead)
  let headoflist = newhead;
  while (l1 && l2) {
    if (l1.data < l2.data) {
      newhead.next = l1;
      l1 = l1.next;
    } else {
      newhead.next = l2;
      l2 = l2.next;
    }
    newhead = newhead.next;
  }
  while (l1) {
    newhead.next = l1;
    l1 = l1.next;
    newhead = newhead.next;
  }
  while (l2) {
    newhead.next = l2;
    l2 = l2.next;
    newhead = newhead.next;
  }
  return headoflist;
};

const print = (head) => {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

let list1 = new LinekedList();
list1.append(13);
list1.append(3);
list1.append(2);
list1.append(1);

// list1.printList()

let list2 = new LinekedList();
list2.append(10);
list2.append(9);
list2.append(8);
list2.append(7);
// list2.printList();

let merge = mergeList(list1, list2);
console.log(merge);
print(merge);
