// 문제 설명
// 철호는 수열을 가지고 놀기 좋아합니다. 어느 날 철호는 어떤 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지인지 알아보고 싶어졌습니다. 원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열을 말합니다. 예를 들어 수열 [7, 9, 1, 1, 4] 로 원형 수열을 만들면 다음과 같습니다.
// 그림.png
// 원형 수열은 처음과 끝이 연결되어 끊기는 부분이 없기 때문에 연속하는 부분 수열도 일반적인 수열보다 많아집니다.
// 원형 수열의 모든 원소 elements가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(elements) {
  var answer = 0;
  const elementsLength = elements.length;

  // 수열을 두 번 이어붙여서 원형 수열처럼 사용하기
  const elementsX2 = [...elements, ...elements];

  const nums = new Set();

  // length는 부분수열의 길이
  for (let length = 1; length <= elementsLength; length++) {
    for (let i = 0; i < elementsLength; i++) {
      const sum = elementsX2.slice(i, i + length).reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      nums.add(sum);
    }
  }

  answer = nums.size;

  return answer;
}

console.log(solution([7, 9, 1, 1, 4])); // 18

// 7은 4와 9랑 이어져 있음
// 9는 7과 1

// for (let i = 0; i < elements.length; i++) {
//   // 마지막 인덱스가 되기 전까지
//   if (i < elements.length - 1) {
//     value = elements[i] + elements[i + 1];
//     // 합한 값이 기존 배열에 없으면 push
//     if (!values.includes(value)) {
//       values.push(value);
//     }
//   } else {
//     // 마지막 인덱스면 첫 번째 인덱스랑 더해준다.
//     value = elements[i] + elements[0];
//     if (!values.includes(value)) {
//       values.push(value);
//     }
//   }
// }
