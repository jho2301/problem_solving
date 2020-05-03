function calBusTimeTable(timeTable: string[], curTime: string): string[] {
  const result: string[] = [];
  let convertedTable: number[] = [];
  let convertedCurTime: number =
    parseInt(curTime.substr(0, 2)) * 60 + parseInt(curTime.substr(3, 5));

  for (let timeStr of timeTable)
    convertedTable.push(
      parseInt(timeStr.substr(0, 2)) * 60 + parseInt(timeStr.substr(3, 5)),
    );

  for (let time of convertedTable) {
    if (time < convertedCurTime) result.push('지나갔습니다.');
    else {
      let hour: string = Math.floor((time - convertedCurTime) / 60)
        .toString()
        .padStart(2, '0');
      let minute: string = ((time - convertedCurTime) % 60)
        .toString()
        .padStart(2, '0');
      result.push(`${hour}시간 ${minute}분`);
    }
  }
  return result;
}

console.log(calBusTimeTable(['12:30', '13:20', '14:13'], '12:40'));
