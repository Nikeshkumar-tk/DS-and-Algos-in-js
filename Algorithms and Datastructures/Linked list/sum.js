class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
a.next = b
b.next = c
c.next = d
d.next = null

//Iterative method
function findSumItterative(head){
  let current = head
  let sum = 0
  while(current !== null){
    sum += current.val
    current = current.next
  }
  return sum
}


//Recursive method
const itterativeResult = findSumItterative(a)
console.log("Result of iterative method = ", itterativeResult)

function findSumRecursive(head){
  if(head === null) return 0
  return head.val + findSumRecursive(head.next)
}

const recursiveResult = findSumRecursive(a)
console.log("Result of recursive method = ",recursiveResult)