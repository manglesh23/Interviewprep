class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const createlist=(a)=>{
    let head= new Node(a[0]);
    let current=head;
    let i=1;
    while(i<a.length){
    let node  =new Node(a[i]);    
    current.next=node;
    current=current.next;
    i++;
    }
    return head;
}

const findMiddle=(head)=>{
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    console.log(slow.data);
}

const listPlaindrome=(head)=>{
    let str='';
    let curr=head;
    while(curr){
        str+=curr.data;
        curr=curr.next;
    }
    console.log(typeof Number(str));
    let revstr=str.split('').reverse().join('');
    if(str===revstr){
        console.log("palindrome");
    }   else{   
        console.log("not a palindrome");
    }
}

let list= createlist([1,2,0,4,0,2,1]);
findMiddle(list);
listPlaindrome(list);