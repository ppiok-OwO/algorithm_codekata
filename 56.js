// 문제 설명
// 과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

// 한 상자에 사과를 m개씩 담아 포장합니다.
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

// 예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

function solution(k, m, score) {
  var answer = 0;
  let boxAmount = Math.floor(score.length / m);
  let arr = [];
  // (k보다는 작은 최저 사과 점수)*m*boxAmount의 총합이 최댓값이 되는 함수
  // 최솟값은 상자에 포함되는 순간 k가 된다.
  // 내림차순으로 sort()한 다음 큰값 m-1개를 묶고 m번째가 k보다 크면 k보다 작은 수를 찾아서 묶는다.

  for (let i = 0; i < boxAmount; i++) {
    arr.push(score.splice(0, m - 1));
    if (score[0] > k) {
      arr.find
    }
  }
  console.log(arr);

  // arr.reduce((acc, curr) => {
  //   return acc + curr[2] * m * boxAmount;
  // }, 0);

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
