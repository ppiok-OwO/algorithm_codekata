// 문제 설명
// 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
// 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

function solution(n, left, right) {
  let answer = [];
  let arr = [];

  // [1][1]은 1 ... [1][i]는 i+1
  // [2][1]은 2 ... [2][i]는 i가 2보다 크면 i+1 작거나 같으면 2
  // [3][1]은 3 ... [3][i]는 i가 3보다 크면 i+1 작거나 같으면 3

  // [i][j]는 j가 i보다 크면 j+1 작거나 같으면 i+1 => 열과 행 중에 큰 숫자가 1 더해서 들어간다.

  // 1차원 배열의 인덱스 k는 k를 n으로 나누었을 때 소숫점을 버리면 행, 나머지가 열
  for (let i = left; i <= right; i++) {
    let row = Math.floor(i / n);
    let col = i % n;
    answer.push(Math.max(row + 1, col + 1));
  }

  return answer;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]

console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
