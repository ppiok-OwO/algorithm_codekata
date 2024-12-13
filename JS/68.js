// 문제 설명
// 햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다. 함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고, 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다. 상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다. 상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며, 재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.

// 예를 들어, 상수의 앞에 쌓이는 재료의 순서가 [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]일 때, 상수는 여섯 번째 재료가 쌓였을 때, 세 번째 재료부터 여섯 번째 재료를 이용하여 햄버거를 포장하고, 아홉 번째 재료가 쌓였을 때, 두 번째 재료와 일곱 번째 재료부터 아홉 번째 재료를 이용하여 햄버거를 포장합니다. 즉, 2개의 햄버거를 포장하게 됩니다.

// 상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.

// function solution(ingredient) {
//   var answer = 0; // 상수가 포장하는 햄버거의 개수
//   // 1: 빵, 2: 야채, 3: 고기

//   // 상수가 만드는 햄버거를 배열로 나타내면
//   const sangSuBurger = [1, 2, 3, 1];
//   // 저 배열을 한 덩어리로 봐야한다면...문자열 메서드를 쓰는 게 더 편하지 않을까?
//   // search...replace

//   let ingredientStr = ingredient.join('').toString();

//   while (true) {
//     if (ingredientStr.search('1231') === -1) {
//       break;
//     }
//     ingredientStr = ingredientStr.replace('1231', '');
//     answer++;
//   }

//   return answer;
// }
// 시간 초과로 통과가 안 됨

function solution(ingredient) {
  var answer = 0; // 상수가 포장하는 햄버거의 개수
  // 1: 빵, 2: 야채, 3: 고기

  // ingredient 배열에서 첫 번째 1, 2, 3, 1이 연달아 나오는지 검사
  // 1231이 완성되면 splice하고 answer++

  for (let i = 0; i <= ingredient.length - 4; ) {
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      // 1231을 발견하면 제거
      ingredient.splice(i, 4);
      answer++;
      // 인덱스 초기화
      i = Math.max(i - 3, 0);
    } else {
      i++;
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
