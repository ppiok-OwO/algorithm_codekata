// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  var answer = "";

  // 짝수번째 인덱스에 "수"를 넣고
  // 홀수번째 인덱스에 "박"을 넣자
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer = answer.concat("수");
    } else {
      answer = answer.concat("박");
    }
  }

  return answer;
}

console.log(solution(3));
console.log(solution(4));
