function solution(s, n) {
  let result = ""; // 결과를 저장할 빈 문자열 초기화

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " "; // 공백인 경우 그대로 추가
      continue; // 다음 문자로 넘어감
    }

    let ascii = s.charCodeAt(i); // 현재 문자의 ASCII 코드 값
    let newChar;

    if (s[i] >= "A" && s[i] <= "Z") {
      // 대문자일 경우
      newChar = String.fromCharCode(((ascii - 65 + n) % 26) + 65);
    } else if (s[i] >= "a" && s[i] <= "z") {
      // 소문자일 경우
      newChar = String.fromCharCode(((ascii - 97 + n) % 26) + 97);
    }

    result += newChar; // 변환된 문자를 결과에 추가
  }

  return result; // 최종 결과 반환
}
