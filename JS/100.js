// 문제 설명
// 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

function solution(x, y, n) {
  if (y === x) return 0;

  const calc = (a, num) => {
    switch (num) {
      case 0:
        return a - n;
      case 1:
        if (a % 2 === 0) {
          return a / 2;
        } else {
          return 0;
        }
      case 2:
        if (a % 3 === 0) {
          return a / 3;
        } else {
          return 0;
        }
    }
  };

  let queue = [[y, 0]]; // [현재 숫자, 연산 횟수]
  let visited = new Set();
  visited.add(y);

  while (queue.length > 0) {
    let [cur, count] = queue.shift();

    for (let next of [calc(cur, 0), calc(cur, 1), calc(cur, 2)]) {
      if (next === x) return count + 1; // 목표 숫자 도달
      if (next > x && !visited.has(next)) {
        queue.push([next, count + 1]);
        visited.add(next);
      }
    }
  }

  return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
