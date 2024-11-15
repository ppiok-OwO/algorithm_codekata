// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  var answer = 0;

  answer = n
    .toString()
    .split("")
    .sort((a, b) => {
      return b - a;
    })
    .map((ele) => {
      return parseInt(ele);
    });

  // N개의 인덱스가 있으면 10**(N-1)부터 10**0까지 곱해줘야 한다.
  for (let i = 0; i < answer.length; i++) {
    answer[i] *= 10 ** (answer.length - i - 1);
  }

  answer = answer.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return answer;
}

console.log(solution(118372));
