// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  // 정답 배열 선언
  let answer = [];
  // 빈 배열 선언
  let arr = [];
  // 숫자 단어 배열 선언 = [one, two, three, four, five, six, seven, eight, nine, zero]
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  // 문자열을 split해서 배열로
  let splitedResult = s.split('');
  // 숫자는 그대로 정답 배열에 할당
  // 알파벳이 나오면 빈 배열에 하나씩 담고 join을 했을 때 숫자 단어 배열에 속해 있는지 검사(includes())
  // 있으면 정답 배열에 인덱스값으로 할당
  for (let i = 0; i < splitedResult.length; i++) {
    let tempChar = splitedResult[i] / 1;
    if (Number.isInteger(tempChar)) {
      answer.push(tempChar);
    } else {
      arr.push(splitedResult[i]);
      let joinedArr = arr.join('');
      if (numbers.includes(joinedArr)) {
        answer.push(numbers.indexOf(joinedArr));
        arr = [];
      }
    }
  }

  answer = answer.join('') / 1;

  return answer;
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
