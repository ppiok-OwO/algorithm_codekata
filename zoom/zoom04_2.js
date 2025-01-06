// 버블 정렬
function bubbleSort(array) {
  let n = array.length; // array의 길이를 n에 저장해요! 루프 카운트 변수로 쓰겠죠?
  for (let i = 0; i < n; i++) {
    // 이건 array를 순차적으로 돌겠다는 뜻이구요!
    // 이건 버블정렬 알고리즘의 특성처럼 1개씩 줄어들면서 반복하며 비교를 해요.
    for (let j = 0; j < n - i - 1; j++) {
      // n-1 -> n-1-1 -> n-2-1
      if (array[j] > array[j + 1]) {
        // 앞의 원소가 뒤의 원소보다 크면 바꿔야겠죠?
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  bubbleSort([4, 6, 2, 9, 1])
);
console.log(
  "정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",
  bubbleSort([3, -1, 17, 9])
);
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  bubbleSort([100, 56, -3, 32, 44])
);

function answer(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // array[i]의 값과 그 이후의 배열의 요소를 비교 더 작은 게 있으면 바꾸기

    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  answer([4, 6, 2, 9, 1])
);
console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ", answer([3, -1, 17, 9]));
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  answer([100, 56, -3, 32, 44])
);

function answer2(array) {
  let n = array.length;

  for (let i = 1; i < n; i++) {
    // array[i]의 값과 그 이전의 배열의 요소를 비교
    // array[j]가 더 크면 위치를 바꿔준다.

    for (let j = 0; j < n; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  answer2([4, 6, 2, 9, 1])
);
console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ", answer2([3, -1, 17, 9]));
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  answer2([100, 56, -3, 32, 44])
);
