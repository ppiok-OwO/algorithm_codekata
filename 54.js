// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

function solution(a, b) {
  var answer = '';
  // [SUN, MON, TUE, WED, THU, FRI, SAT] = [3, 4, 5, 6, 0, 1, 2];
  let daysOfweek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  // 7일을 주기로 배열을 순환
  // 2016년은 366일이 있고 FRI부터 배열을 순환한다...
  // n번째 날은 (n%7)에 대응하는 요일
  // 5월 24일은 monthDays배열의 인덱스가 3(5-2)인 요소까지 더하고 24를 더한 것
  let monthDays = [31, 29, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
  let result = monthDays.slice(0, a - 1).reduce((acc, curr) => acc + curr, 0);
  // console.log(result + b);

  answer = daysOfweek[(result + b - 1) % 7];

  return answer;
}

console.log(solution(5, 24)); // "TUE"
console.log(solution(1, 8)); // "TUE"
console.log(solution(10, 16)); // "TUE"
console.log(solution(12, 31)); // "TUE"
