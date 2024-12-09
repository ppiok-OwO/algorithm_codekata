// 문제 설명
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

function solution(n, lost, reserve) {
  var answer = 0; // 체육수업을 들을 수 있는 학생의 최댓값
  let arr = [];

  // 여벌 체육복을 가져온 학생은 도난 당해도 체육 수업을 들을 수 있다.
  // 여벌 체육복을 가져오지 않은 학생은 도난 당하면 체육복을 빌려야 한다.

  // lost[i]-1을 인덱스로 가진 학생들은 체육복 숫자가 1씩 낮아짐. 0인 학생은 주변 학생에게 빌릴 수 있음. 1이상인 요소만 센 뒤 반환하기.

  // 학생들이 가져온 체육복 갯수 배열
  for (let i = 0; i < n; i++) {
    arr.push(1);

    if (reserve.includes(i + 1)) {
      arr[i] += 1;
    }
  }

  // console.log(arr);

  // 도난 당하기
  arr.forEach((student, index) => {
    if (lost.includes(index + 1)) {
      arr[index] -= 1;
    }
  });
  // 체육복 빌려주기
  arr.forEach((student, index) => {
    if (arr[index] === 0) {
      if (arr[index - 1] === 2) {
        arr[index] += 1;
        arr[index - 1] -= 1;
      } else if (arr[index + 1] === 2) {
        arr[index] += 1;
        arr[index + 1] -= 1;
      }
    }
  });

  // console.log(arr);

  answer = arr.filter((value) => {
    return value >= 1;
  }).length;

  // console.log(answer);

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
