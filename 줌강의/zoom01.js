function spellCount(string) {
  let answer = {};

  // 알파벳을 배열에 하나씩 할당
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (answer[char]) {
      answer[char]++;
    } else {
      answer[char] = 1;
    }
  }
  return answer;
}

console.log(spellCount("obsidian"));
