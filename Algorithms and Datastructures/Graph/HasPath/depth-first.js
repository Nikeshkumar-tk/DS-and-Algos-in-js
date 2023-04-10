const hasPath = (graph, root, dest) => {
  if(root === dest) return true
  graph[root]?.forEach((node) => {
    if(hasPath(graph, node, dest) === true) return true
  })
  return false
}

const graph = {
  a:["b","c"],
  b:["d"],
  c:["e","f"]
}

console.log(hasPath(graph, "a", "f"))