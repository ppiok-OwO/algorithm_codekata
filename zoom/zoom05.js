// 퀵 정렬을 재귀함수로

function solution(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  const leftGroup = [];
  const rightGroup = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftGroup.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightGroup.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...solution(leftGroup), ...equal, ...solution(rightGroup)];
}

// 테스트
const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 10];
console.log(solution(unsortedArray)); // 실행할 때마다 결과는 동일하지만 과정은 랜덤
