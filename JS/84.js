// 문제 설명
// 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

// (), [], {} 는 모두 올바른 괄호 문자열입니다.
// 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
// 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
// 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  var answer = 0;

  // (1)회전 로직
  // 일단 배열로 만들고 shift, push로 구현하기
  let bracketArr = s.split('');
  let count = 0;

  bracketArr.forEach((bracket, index) => {
    if (isValidBracket(bracketArr)) {
      count++;
    }
    let shiftedBracket = bracketArr.shift();
    bracketArr.push(shiftedBracket);
  });

  // (2)올바름 판정 로직
  function isValidBracket(arr) {
    const stack = [];
    const matching = {
      ')': '(',
      ']': '[',
      '}': '{',
    };

    for (let char of arr) {
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack.pop() !== matching[char]) {
          return false;
        }
      }
    }

    return stack.length === 0; // 스택이 비어 있어야 올바름
  }

  if (count !== 0) answer = count;

  return answer;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
