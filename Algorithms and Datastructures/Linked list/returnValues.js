class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
a.next = b
b.next = c
c.next = d
d.next = null

function getValues(head){
  let current = head
  const values = []
  while(current !== null){
    values.push(current.val)
    current = current.next
  }
  return values
}

//Calling getValues function by passing node "a" as head
const result = getValues(a)

//Printing the result in consolr
console.log(result)