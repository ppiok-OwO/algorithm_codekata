// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = [];

  numbers.forEach((ele, index, arr) => {
    if (index < arr.length - 1) {
      for (let i = index + 1; i < arr.length; i++) {
        let sum = ele + arr[i];
        if (!answer.includes(sum)) {
          answer.push(sum);
        }
      }
    }
  });

  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
