class LinkedListNode{
  constructor(val){
    this.val = val
    this.next = null
  }
}

const a = new LinkedListNode("A")
const b = new LinkedListNode("B")
const c = new LinkedListNode("C")
const d = new LinkedListNode("D")
a.next = b
b.next = c
c.next = d
d.next = null

function traverseLinkedList(head){
  let current = head
  while(current !== null){
    console.log(current.val)
    current = current.next
  }
}

traverseLinkedList(a)

