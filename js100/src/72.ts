const graph72: any = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

function bfs(graph: any, start: string): string {
  const visited: string[] = [];
  const buffer: string[] = [start];

  while (buffer.length !== 0) {
    let n: string = buffer.shift() || "";
    if (!visited.includes(n)) {
      visited.push(n);
      let sub: string[] = graph[n].filter((x: string) => !visited.includes(x));
      for (let m of sub) buffer.push(m);
    }
  }

  return visited.join(" ");
}

console.log(bfs(graph72, "E"));
