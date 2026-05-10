// Node class representing each element in the list
class Node {
    constructor(data) {
        this.data = data;  // Value of the node
        this.next = null;  // Pointer to the next node
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
        let result = '';
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
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
    reverse(){
        let currnum=this.head;
        console.log(currnum.data);
        let prev=null;
        let next=null;
        while(currnum!==null){
            next=currnum.next;
            currnum.next=prev;
            prev=currnum;
            currnum=next;
        }
        this.head=prev;
    }
}

const list = new LinkedList();
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
console.log(list.find(20));  
