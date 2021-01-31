function solution(next_student) {
  const routes = new Array(next_student.length).fill(null).map(() => []); // next_student.length를 이용해 새로 배열을 생성해주는게 더 명시적일 것 같다.
  for (
    let curStudentIdx = 0;
    curStudentIdx < next_student.length;
    curStudentIdx++
  ) {
    const curStudent = curStudentIdx + 1;
    const curRoute = [curStudent];
    let nextStudent = next_student[curStudentIdx];
    let nextStudentIdx = next_student[curStudentIdx] - 1;

    if (next_student[curStudentIdx] === 0) {
      routes[curStudentIdx] = curRoute;
      continue;
    }

    // 해당 시점에서 이미 계산된 값을 이용해 새로운 값을 만드는 로직을 추상화했습니다.
    if (routes[nextStudentIdx].length) {
      routes[curStudentIdx] = createRouteFromRoutes({
        routes,
        curStudent,
        nextStudentIdx,
      });
      continue;
    }

    // O(n^3)을 O(n^2)으로 만들기 위해 이전에 방문했는지 여부를 알 수 있는 배열을 만들었습니다.
    const hasVisited = new Array(next_student.length).fill(false);
    hasVisited[curStudentIdx] = true;

    // includes메서드로 curRoute에 nextStudent가 있는지 여부를 파악하는 것을 재방문했는지만 체크함으로써 3중루프를 막았습니다.
    while (!hasVisited[nextStudentIdx]) {
      curRoute.push(nextStudent);
      hasVisited[nextStudentIdx] = true;
      nextStudent = next_student[nextStudentIdx];
      nextStudentIdx = nextStudent - 1;
      if (next_student[nextStudentIdx] === 0) break;
    }
    routes[curStudentIdx] = curRoute;
  }

  const maxLength = Math.max(...routes.map((route) => route.length));
  for (let studentIdx = routes.length - 1; i >= 0; i--) {
    const student = studentIdx + 1;
    if (routes[studentIdx].length === maxLength) return student;
  }

  return -1;
}

function createRouteFromRoutes({ routes, curStudent, nextStudentIdx }) {
  if (!routes[nextStudentIdx].includes(curStudent)) {
    return [...routes[nextStudentIdx], curStudent];
  } else {
    let targetIdx = routes[nextStudentIdx].findIndex(
      (studentNo) => studentNo === curStudent
    );
    return [curStudent, ...routes[nextStudentIdx].slice(0, targetIdx)];
  }
}

console.log(solution([5, 9, 13, 1, 0, 0, 11, 1, 7, 12, 9, 9, 2]));
console.log(solution([6, 10, 8, 5, 8, 10, 5, 1, 6, 7]));
