// 컴퓨터 바탕화면은 각 칸이 정사각형인 격자판입니다. 이때 컴퓨터 바탕화면의 상태를 나타낸 문자열 배열 wallpaper가 주어집니다. 파일들은 바탕화면의 격자칸에 위치하고 바탕화면의 격자점들은 바탕화면의 가장 왼쪽 위를 (0, 0)으로 시작해 (세로 좌표, 가로 좌표)로 표현합니다. 빈칸은 ".", 파일이 있는 칸은 "#"의 값을 가집니다. 드래그를 하면 파일들을 선택할 수 있고, 선택된 파일들을 삭제할 수 있습니다. 머쓱이는 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해서 한 번에 지우려고 하며 드래그로 파일들을 선택하는 방법은 다음과 같습니다.

// 드래그는 바탕화면의 격자점 S(lux, luy)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동입니다. 이때, "점 S에서 점 E로 드래그한다"고 표현하고 점 S와 점 E를 각각 드래그의 시작점, 끝점이라고 표현합니다.

// 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때, "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의합니다.

// 점 S에서 점 E로 드래그를 하면 바탕화면에서 두 격자점을 각각 왼쪽 위, 오른쪽 아래로 하는 직사각형 내부에 있는 모든 파일이 선택됩니다.

function solution(wallpaper) {
  var answer = []; // 시작점과 끝점을 배열에 담아서 반환

  // wallpaper의 요소마다 첫 번째#의 인덱스와 마지막 #의 인덱스를 구해보자
  let folderIndex = [];
  wallpaper.forEach((element, index) => {
    let firstFolder = element.indexOf('#');
    if (firstFolder === -1) {
      firstFolder = null;
    }
    let firstFolderIndex = [index, firstFolder];
    let lastFolder = element.lastIndexOf('#');
    if (lastFolder === -1) {
      lastFolder = null;
    }
    let lastFolderIndex = [index, lastFolder];

    folderIndex.push([firstFolderIndex, lastFolderIndex]);
  });

  let minX = null;
  let minY = null;
  folderIndex.forEach((element, index) => {
    for (let i = 0; i < element.length; i++) {
      // 최소 x좌표는 y가 null이 아닐 때
      if (element[i][1] !== null && minX === null) {
        minX = index;
      }
      if (minY === null || element[i][1] < minY) {
        minY = element[i][1];
      }
    }
  });

  let maxX = null;
  let maxY = null;
  folderIndex.forEach((element, index) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i][1] !== null) {
        maxX = index;
      }
      if (maxY === null || element[i][1] > maxY) {
        maxY = element[i][1];
      }
    }
  });

  let folderCoordinate = [minX, minY, maxX + 1, maxY + 1];

  return folderCoordinate;
}

console.log(solution(['.#...', '..#..', '...#.'])); // [0, 1, 3, 4]
console.log(
  solution([
    '..........',
    '.....#....',
    '......##..',
    '...##.....',
    '....#.....',
  ]),
); // [1, 3, 5, 8]]
console.log(
  solution([
    '.##...##.',
    '#..#.#..#',
    '#...#...#',
    '.#.....#.',
    '..#...#..',
    '...#.#...',
    '....#....',
  ]),
); // [0, 0, 7, 9]]
console.log(solution(['..', '#.'])); // [1, 0, 2, 1]]
