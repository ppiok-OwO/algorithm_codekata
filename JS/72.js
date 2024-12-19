// 문제 설명
// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

function solution(players, callings) {
  var answer = [];

  // 선수 이름과 현재 순위를 매핑
  const rankMap = new Map();
  players.forEach((player, index) => rankMap.set(player, index));

  // calling의 0번째 선수를 players에서 찾고 자리바꾸기
  callings.forEach((player) => {
    // 이름이 불린 선수의 현재 순위
    const currentRank = rankMap.get(player);

    // 이전 순위의 플레이어 이름
    const prevPlayer = players[currentRank - 1];

    // 구조분해할당(배열에서 순위 바꿔주기)
    [players[currentRank - 1], players[currentRank]] = [
      players[currentRank],
      players[currentRank - 1],
    ];

    // Map의 순위 정보 업데이트
    rankMap.set(player, currentRank - 1);
    rankMap.set(prevPlayer, currentRank);
  });

  answer = players;
  return answer;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine'],
  ),
);
// ["mumu", "kai", "mine", "soe", "poe"]
