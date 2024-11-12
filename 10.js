// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;
  let sumOfArr = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfArr += numbers[i];
  }
  answer = sumOfArr / numbers.length;
  return answer;
}
