// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
  var answer = true;
  let sumOfX;

  // x의 자릿수의 합을 먼저 구한다.

  sumOfX = x
    .toString()
    .split("")
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
    
  // x는 sumOfX로 나누어지는가?

  x % sumOfX === 0 ? (answer = true) : (answer = false);

  return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
