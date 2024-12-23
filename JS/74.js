function solution(id_list, report, k) {
  var answer = []; // 유저별 메일을 받은 횟수 배열

  // 알아내야 하는 것 : 유저가 신고한 아이디가 몇 번 신고당했는가?

  // 신고당한 횟수를 저장하는 객체
  let reportCount = {};
  let userReports = {};

  // 신고한 사람과 신고당한 사람을 구분하여 저장(Set으로 중복 제거)
  report.forEach((r) => {
    let [reporter, reported] = r.split(' ');
    if (!userReports[reporter]) {
      userReports[reporter] = new Set();
    }
    userReports[reporter].add(reported);
  });

  // 신고당한 횟수를 계산
  Object.values(userReports).forEach((reportedSet) => {
    reportedSet.forEach((reported) => {
      if (!reportCount[reported]) {
        reportCount[reported] = 0;
      }
      reportCount[reported]++;
    });
  });

  // 알아내야 하는 것 : 유저가 신고한 아이디가 정지를 당했는가?
  // 정지를 당한 아이디를 저장하는 객체
  let isBanned = {};
  Object.keys(reportCount).forEach((id) => {
    if (reportCount[id] >= k) {
      // 정지를 당한 아이디를 객체에 저장
      isBanned[id] = true;
    }
  });

  // 유저별 메일을 받은 횟수 계산
  id_list.forEach((id) => {
    let mailCount = 0;
    if (userReports[id]) {
      userReports[id].forEach((reported) => {
        if (isBanned[reported]) {
          mailCount++;
        }
      });
    }
    answer.push(mailCount);
  });

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2,
  ),
); // [2, 1, 1, 0]
console.log(
  solution(
    ['con', 'ryan'],
    ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
    3,
  ),
); // [0, 0]
