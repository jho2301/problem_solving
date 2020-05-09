const graph73: any = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

let minCnt: number[] = [];

function getShortestRoot(
  graph: any,
  startend: string,
  cnt: number,
  visited: string[]
): void {
  let start: string = startend[0];
  const end: string = startend[2];

  visited.push(start);
  if (!graph[start].includes(end)) {
    for (let n of graph[start]) {
      if (!visited.includes(n))
        getShortestRoot(graph73, `${n} ${end}`, cnt + 1, visited);
    }
  } else minCnt.push(cnt);
  return;
}

getShortestRoot(graph73, "A F", 1, []);
console.log(Math.min(...minCnt));
