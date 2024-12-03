// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  answer = arr.reduce(function (acc, curr) {
    return acc + curr;
  });

  return answer;
}
