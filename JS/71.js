function solution(today, terms, privacies) {
  var answer = []; // 파기해야 할 개인정보의 번호

  const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);

  const termMap = new Map();
  terms.forEach((value) => {
    const [type, TTL] = value.split(' ');
    termMap.set(type, Number(TTL));
  });

  privacies.forEach((value, index) => {
    const [date, type] = value.split(' ');
    let [year, month, day] = date.split('.').map(Number);

    month += termMap.get(type);

    // 월이 12를 넘으면 연도를 증가시키고 월을 조정
    while (month > 12) {
      year += 1;
      month -= 12;
    }

    if (
      year < todayYear ||
      (year === todayYear && month < todayMonth) ||
      (year === todayYear && month === todayMonth && day <= todayDay)
    ) {
      answer.push(index + 1); // 개인정보 번호는 1부터 시작
    }
  });

  return answer;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ),
);
console.log(
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    [
      '2019.01.01 D',
      '2019.11.15 Z',
      '2019.08.02 D',
      '2019.07.01 D',
      '2018.12.28 Z',
    ],
  ),
);
