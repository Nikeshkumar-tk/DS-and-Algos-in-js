//Breadth first traversal of graph using queue

const breadthFirst = (graph, root) => {
  const queue = [root]
  while(queue.length > 0){
    const current = queue.shift()
    console.log(current)
    graph[current]?.forEach((node) => {
      queue.push(node)
    })
  }
}

const graph = {
  a:["b","c"],
  b:["d"],
  c:["e","f"]
}

breadthFirst(graph, "a")
