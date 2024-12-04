function solution(lottos, win_nums) {
  var answer = []; // [최고 순위, 최저 순위]

  // 최고 순위는 0이 모두 당첨되었다고 가정
  // 최저 순위는 0이 모두 당첨되지 않았다고 가정
  let lottoNum = lottos.filter((numbers) => win_nums.includes(numbers)).length;
  let hopeNum = lottos.filter((numbers) => numbers === 0).length;

  let highest = lottoNum + hopeNum;
  let lowest = lottoNum;

  answer[0] = result(highest);
  answer[1] = result(lowest);

  return answer;
}

const result = (num) => {
  switch (num) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
};