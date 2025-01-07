// 문제 설명
// 효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
// (1칸, 1칸, 1칸, 1칸)
// (1칸, 2칸, 1칸)
// (1칸, 1칸, 2칸)
// (2칸, 1칸, 1칸)
// (2칸, 2칸)
// 의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.

// 제한 사항
// n은 1 이상, 2000 이하인 정수입니다.

// function solution(n) {
//   let answer = 0; // 멀리뛰기 경우의 수 % 1234567
//   let MOD = 1234567;

//   // n이 1일 때는 경우의 수가 하나밖에 없다.
//   // n이 2 이상일 때는 2칸 뛰기를 0번, 1번, 2번, 3번, ...n/2번하고 나머지를 1칸뛰기하는 경우의 수가 존재
//   // nCr 공식으로 풀 수 있음 => n!/r!(n-r)! => 여기서 r은 n/2
//   // nCr에서 r이 0~n/2까지 다 더하기

//   if (n === 1) {
//     return 1 % MOD;
//   }

//   // 팩토리얼 계산 함수
//   const factorial = (num) => {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result = (result * i) % MOD;
//     }
//     return result;
//   };

//   // 조합 계산 함수
//   const combination = (n, r) => {
//     if (r > n) return 0;
//     return (factorial(n) / (factorial(r) * factorial(n - r))) % MOD;
//   };

//   // 2칸 뛰기 횟수 k에 따라 경우의 수 합산
//   for (let k = 0; k <= Math.floor(n / 2); k++) {
//     const remainingSteps = n - k; // 1칸 + 2칸의 총 이동 칸 수
//     answer = (answer + combination(remainingSteps, k)) % MOD;
//   }

//   return answer;
// }

// 1234567로 나눈 나머지가 필요해서 점화식이 아니면 풀 수 없다...
// 순열과 조합으로 풀 수 없다니 문제가 좀 불합리하지 않나...ㅠㅠ
function solution(n) {
  const dp = [0, 1, 2];
  if (n < 3) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
