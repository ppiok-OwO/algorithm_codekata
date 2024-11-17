// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  var answer = "";
  let resultInt;

  // findIndex를 쓰면 될 것 같다.
  resultInt = seoul.findIndex((x) => {
    return x === "Kim";
  });

  answer = `김서방은 ${resultInt}에 있다`;

  return answer;
}

console.log(solution(["Jane", "Kim"])); // "김서방은 1에 있다"
