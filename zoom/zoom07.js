function solution(arr) {
  let route = [];

  arr.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  // 첫ICN이 route[0]에 들어가야 함 => 그 다음을 찾고 반복...
  function findRoute(current, arr) {
    route.push(current);

    if (arr.length === 0) {
      return true;
    }
    for (let i = 0; i < arr.length; i++) {
      const [from, to] = arr[i];
      if (from === current) {
        const nextTickets = arr.slice();
        nextTickets.splice(i, 1);
        if (findRoute(to, nextTickets)) {
          return true;
        }
      }
    }
  }

  findRoute('ICN', arr);
  return route;
}
console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ]),
);
