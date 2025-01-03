// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  var answer = [];
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  // answers의 길이에 따라 찍기 배열 생성
  for (let i = 0; i < answers.length; i++) {
    // 1번 수포자
    if (index1 === 5) index1 = 0;
    arr1[i] = index1 + 1;
    index1++;

    // 2번 수포자
    if (i % 2 === 0) {
      arr2[i] = 2;
    } else {
      if (index2 === 5) index2 = 0;
      if (index2 + 1 === 2) index2 += 1;
      arr2[i] = index2 + 1;
      index2++;
    }

    // 3번 수포자
    let pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    if (index3 === pattern.length) index3 = 0;
    arr3[i] = pattern[index3];
    index3++;
  }

  let answerCount = [0, 0, 0];

  // 정답 세기
  answers.forEach((element, index) => {
    if (element === arr1[index]) {
      answerCount[0] += 1;
    }
    if (element === arr2[index]) {
      answerCount[1] += 1;
    }
    if (element === arr3[index]) {
      answerCount[2] += 1;
    }
  });

  // 제일 많이 맞힌 사람 구하기
  const largestNumber = Math.max(...answerCount);
  answer = answerCount
    .map((value, index) => (value === largestNumber ? index : -1))
    .filter((index) => index !== -1)
    .map((value) => value + 1);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
