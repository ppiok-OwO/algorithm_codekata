// 문제 설명
// "명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

// 이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.

// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

function solution(k, score) {
  var answer = [];

  // 점수 배열을 받아서 내림차순으로 sort하고
  // k만큼 자른 후 slice로 반환
  // 해당 배열의 마지막 요소(pop())를 answer에 push()

  // 근데 이게 매일매일이었네...

  // i+1번째 날에 score.slice(0,i) 이렇게 배열을 받아와야 할 듯
  let newScore = [];
  let slicedScore = [];
  for (let i = 1; i < score.length + 1; i++) {
    newScore = score.slice(0, i);
    slicedScore = newScore.sort((a, b) => b - a).slice(0, k);
    answer.push(slicedScore.pop());
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]