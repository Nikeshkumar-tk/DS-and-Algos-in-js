//Algorithm for traversing through a linked list
class LinkedListNode{
  constructor(val){
    this.val = val
    this.next = null
  }
}

//Manually creating nodes of linked list
const a = new LinkedListNode("A")
const b = new LinkedListNode("B")
const c = new LinkedListNode("C")
const d = new LinkedListNode("D")
a.next = b
b.next = c
c.next = d
d.next = null

//Function for traversing through each nodes of linked list
//console the values of each node
function traverseLinkedList(head){
  let current = head
  while(current !== null){
    console.log(current.val)
    current = current.next
  }
}

//Calling traversal function by passing "a" as the head node.
traverseLinkedList(a)

