function solution(s) {
  var answer = '';

  // 공백을 기준으로 split
  // 최솟값, 최댓값 찾기

  let arr = s.split(' ');
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  answer = min + ' ' + max;

  return answer;
}

console.log(solution('1 2 3 4')); // 1 4
console.log(solution('-1 -2 -3 -4')); // -4 -1
console.log(solution('-1 -1')); // -1 -1