//Depth first traversal of graph using stack

const depthFirst = (graph, source) => {
  const stack = [source]
  while(stack.length > 0){
  const current = stack.pop()
  console.log(current)
  graph[current]?.forEach((node) => {
    stack.push(node)
  })
  }
}

const graph = {
  a:["b","c"],
  b:["d"],
  c:["e","f"]
}

depthFirst(graph, "a")