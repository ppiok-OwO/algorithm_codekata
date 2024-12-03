// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(strings, n) {
  let str = [];
  for (let i = 0; i < strings.length; i++) {
    str[i] = strings[i][n] + strings[i];
  }

  let sortedStr = str.sort();
  var answer = [];

  for (let i = 0; i < sortedStr.length; i++) {
    answer[i] = sortedStr[i].slice(1, sortedStr[i].length + 1);
  }

  return answer;
}
