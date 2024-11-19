// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

function solution(n, m) {
  var answer = [];

  answer.push(Euclidean(n, m));
  answer.push(lcm(n, m));

  return answer;
}

// 최대공약수는 유클리드 호제법을 통해 구할 수 있다.
function Euclidean(n, m) {
  let r = n % m;
  if (r === 0) return m;
  return Euclidean(m, r);
}

// 최소공배수*최대공약수 = 두 수의 곱의 절댓값
function lcm(n, m) {
  return Math.abs(n * m) / Euclidean(n, m);
}
