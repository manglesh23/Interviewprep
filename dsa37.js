class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

const createList = (a) => {
  let head = new Node(a[0]);
  head.next = null;
  let i = 1;
  while (i < a.length) {
    let newNode = new Node(a[i]);
    newNode.next = head;
    head = newNode;
    i++;
  }
  return head;
};

const printList = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
};

const swapNode=(head)=>{
   let dummy= new Node(999);
   dummy.next=head;
   let prev=dummy;
   let curr=head;
   while(curr && curr.next){
    let first=curr;
    let second=curr.next;
    first.next=second.next;
    second.next=first;
    prev.next=second;

    prev=first;
    curr=first.next
   }
   return dummy.next;
}

let list = createList([1, 2, 3, 4, 5, 6, 7]);
// console.log(list);
printList(list);
let swaphead=swapNode(list);
console.log("swap:-",swaphead);
printList(swaphead);
