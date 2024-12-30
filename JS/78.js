// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// function solution(n) {
//   var answer = 0; // n번째 피보나치 수를 1234567으로 나눈 나머지

//   // 마지막 인덱스가 n인 피보나치 수열
//   const fibonacciNumbers = fibonacci(n);

//   answer = fibonacciNumbers[n] % 1234567;

//   return answer;
// }

// function fibonacci(n) {
//   let fibonacciNumbers = [0, 1];

//   if (n >= 2) {
//     for (let i = 2; i <= n; i++) {
//       let fibonacciNum = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
//       fibonacciNumbers.push(fibonacciNum);
//     }
//   }

//   return fibonacciNumbers;
// }

function solution(n) {
  var answer = 0; // n번째 피보나치 수를 1234567으로 나눈 나머지
  const MOD = 1234567;

  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let next = (a + b) % MOD;
    a = b;
    b = next;
  }

  return n === 0 ? a : b;
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
console.log(solution(60));
console.log(fibonacci(3));
console.log(fibonacci(5));
