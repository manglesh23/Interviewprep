class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    let count = 0;
    let temp = head;

    // Count k nodes
    while (temp && count < k) {
        temp = temp.next;
        count++;
    }

    if (count === k) {
        // Reverse k nodes
        let prev = null, curr = head, next = null;
        for (let i = 0; i < k; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Recursively reverse the remaining nodes
        head.next = reverseKGroup(curr, k);

        return prev; // New head of the reversed segment
    }

    return head; // If less than k nodes remain, return as is
}

// Helper function to print linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> ") + " -> null");
}

// Example Usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let k = 3;
let newHead = reverseKGroup(head, k);
printList(newHead); // Output: 3 -> 2 -> 1 -> 5 -> 4 -> null
