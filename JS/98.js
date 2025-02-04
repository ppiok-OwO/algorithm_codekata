// 문제 설명
// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// function solution(numbers) {
//   var answer = [];

//   // 인덱스를 기준으로 앞부분/뒷부분으로 나눈 뒤 탐색

//   numbers.forEach((element, index) => {
//     let former = numbers.slice(0, index);
//     let later = numbers.slice(index + 1);

//     const sortedFormer = former.slice().sort((a, b) => a - b);
//     const sortedLater = later.slice().sort((a, b) => a - b);

//     const formerNum = sortedFormer.find((value) => value > element);
//     const laterNum = sortedLater.find((value) => value > element);

//     let result;
//     if (formerNum === undefined && laterNum === undefined) {
//       result = -1;
//     } else if (formerNum === undefined) {
//       result = laterNum;
//     } else if (laterNum === undefined) {
//       result = formerNum;
//     } else {
//       result = Math.min(formerNum, laterNum);
//     }

//     answer.push(result);
//   });

//   return answer;
// }

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1); 
  const stack = []; 

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}


console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
