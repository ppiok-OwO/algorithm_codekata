// 문제 설명
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

// function solution(X, Y) {
//   var answer = '';

//   // 두 수를 문자열로 만들고 배열로 만들어서 같은 문자가 있는지 확인
//   // 그 문자들을 숫자로 변환해서 내림차순으로 정렬
//   // join('')

//   X = X.toString().split('');
//   Y = Y.toString().split('');

//   let coupleNum = [];

//   X.forEach((element) => {
//     let yIndex = Y.findIndex((ele) => ele === element);
//     if (yIndex !== -1) {
//       coupleNum.push(element);
//       Y.splice(yIndex, 1);
//     }
//   });

//   answer = coupleNum
//     .map(Number)
//     .sort((a, b) => b - a)
//     .join('');

//   const rgxZero = /^0+$/;

//   if (!answer) {
//     answer = '-1';
//   } else if (rgxZero.test(answer)) {
//     answer = '0';
//   }

//   answer.toString();

//   return answer;
// }

// 위 함수는 정답이 나오지만 시간복잡도가 너무 높아서 통과가 안 됐다.

function solution(X, Y) {
  let answer = '';

  // 각 숫자의 등장 횟수를 기록
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);

  // X와 Y의 각 숫자 등장 횟수 계산
  for (let char of X) countX[char]++;
  for (let char of Y) countY[char]++;

  // 두 배열에서 공통으로 등장하는 숫자를 계산
  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]); // 공통된 횟수
    answer += i.toString().repeat(commonCount); // 공통된 숫자를 추가
  }

  // 결과 처리
  if (!answer) return '-1'; // 공통 숫자가 없으면 -1 반환
  if (answer[0] === '0') return '0'; // 0으로만 이루어졌다면 0 반환

  return answer;
}

console.log(solution('100', '2345')); // -1
console.log(solution('100', '203045')); // 0
console.log(solution('100', '123450')); // 10
console.log(solution('12321', '42531')); // 321
console.log(solution('5525', '1255')); // 552
