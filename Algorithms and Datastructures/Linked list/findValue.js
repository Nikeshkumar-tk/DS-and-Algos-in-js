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

  function findValue(head, target){
    let current = head
    while(current !== null){
        if(current.val === target){
            return true
        }
        current = current.next
    }
    return false
  }


  console.log(findValue(a, 6))