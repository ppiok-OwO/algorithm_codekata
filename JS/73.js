function solution(park, routes) {
  let startX = 0,
    startY = 0;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === 'S') {
        startX = i;
        startY = j;
        break;
      }
    }
  }

  const directions = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  };

  function isValid(x, y, dir, distance) {
    for (let i = 1; i <= distance; i++) {
      const nx = x + directions[dir][0] * i;
      const ny = y + directions[dir][1] * i;

      if (
        nx < 0 ||
        nx >= park.length ||
        ny < 0 ||
        ny >= park[0].length ||
        park[nx][ny] === 'X'
      ) {
        return false;
      }
    }
    return true;
  }

  for (const route of routes) {
    const [dir, distStr] = route.split(' ');
    const distance = parseInt(distStr, 10);

    if (isValid(startX, startY, dir, distance)) {
      startX += directions[dir][0] * distance;
      startY += directions[dir][1] * distance;
    }
  }

  return [startX, startY];
}
