function solution(number, limit, power) {
  var answer = 0; // 무기를 모두 만들기 위해 필요한 철의 무게(= 무기 공격력의 총합)

  // number명의 기사에 대해서 약수의 개수(공격력)를 구해야 한다.
  for (let i = 1; i <= number; i++) {
    let dmg = 0;
    const sqrt = Math.sqrt(i); // 약수는 대칭이라 반복문을 절반만 돌려도 된다.

    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        dmg++;
        if (j !== i / j) dmg++; // j가 sqrt와 일치하지 않을 때
      }
      if (dmg > limit) {
        dmg = power; // 제한 수치 초과 시 바로 power로 변경
        break;
      }
    }
    answer += dmg;
  }

  return answer;
}