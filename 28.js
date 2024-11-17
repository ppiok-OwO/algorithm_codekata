// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = -1;
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = [];

  // numbers랑 같은 요소가 없는 수를 남기기

  result = array.filter((x) => {
    return !numbers.includes(x);
  });

  answer = result.reduce((acc, curr) => acc + curr);

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
