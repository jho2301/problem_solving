const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

function dfs(graph: any, start: string) {
  let visited: string[] = [];
  let stack: string[] = [start];

  while (stack.length !== 0) {
    let n: string = stack.pop() || "";
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x: string) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
  return visited;
}

console.log(dfs(graph, "E"));
