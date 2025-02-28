// 문제 설명
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// carpet.png

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(brown, yellow) {
  var answer = []; // 카펫의 가로, 세로 크기(가로 크기는 세로 크기보다 작을 수 없다.)
  // let width;
  // let height;

  // brown = answer[0]*2 + (answer[1]-2)*2 = 2 * (answer[0] + answer[1] - 2) = 2 * (가로 + 세로 - 2)
  // yellow = (answer[0]-2)*(answer[1]-2) = 가로*세로 -2(가로 + 세로) +4 = 가로*세로 -brown -4 + 4

  // 가로 + 세로 = brown / 2 + 2
  // 가로 * 세로 = brown + yellow

  for (let width = 0; width < brown / 2; width++) {
    for (let height = 0; height <= width; height++) {
      if (
        width + height === brown / 2 + 2 &&
        width * height === brown + yellow
      ) {
        answer.push(width);
        answer.push(height);
      }
    }
  }
  return answer;
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
