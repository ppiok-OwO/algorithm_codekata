// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// stdin => standard input 표준 입력
// 자바스크립트의 기본적인 데이터 입력 스트림

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' '); // ['5', '3'] 배열이 담긴다.
  const a = Number(n[0]), // '5'를 5로 형변환
    b = Number(n[1]); // '3'을 3으로 형변환
  console.log(a); // 5
  console.log(b); // 3

  // for (let i = 0; i < b; i++) {
  //   console.log('*'.repeat(a)); // 별 5개를 3줄 반복해서 출력하기
  // }

  let stars = '';
  for (let i = 0; i < a; i++) {
    stars = stars + '*';
  }
  for (let i = 0; i < b; i++) {
    console.log(stars);
  }
});
