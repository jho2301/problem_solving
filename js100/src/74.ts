const graph74 = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

let maxCnt74: number[] = [];

function getlongestestRoot(
  graph: any,
  start: any,
  end: any,
  cnt: any,
  visited: any
) {
  visited.push(start);

  if (graph[start].includes(end)) {
    maxCnt74.push(cnt);
    console.log(visited);
    // (visited as number[]).pop();
  }

  for (let i = 0; i < graph[start].length; i += 1) {
    if (!visited.includes(graph[start][i]) && graph[start][i] !== end)
      getlongestestRoot(graph74, graph[start][i], end, cnt + 1, visited);
  }
  (visited as number[]).pop();
}

getlongestestRoot(graph74, 1, 7, 1, []);
console.log(Math.max(...maxCnt74));
