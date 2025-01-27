function solution(fees, records) {
  var answer = [];
  // 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return
  // records: 시각, 차량번호, 입출차 내역
  // 출차된 내역이 없다면, 23:59에 출차된 것

  const [basicTime, basicFee, unitTime, unitFee] = fees;
  // let totalParkingTime = 0;
  // let totalFee =
  //   basicFee + Math.ceil((totalParkingTime - basicTime) / unitTime) * unitFee;

  const timeToMinutes = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  const parkingRecords = new Map();

  records.forEach((record) => {
    const [time, carNumber, action] = record.split(' ');

    if (!parkingRecords.has(carNumber)) {
      parkingRecords.set(carNumber, []);
    }
    parkingRecords.get(carNumber).push({ time: timeToMinutes(time), action });
  });

  const totalParkingTimes = new Map();

  for (let [carNumber, actions] of parkingRecords) {
    let totalTime = 0;
    let lastInTime = null;

    actions.forEach(({ time, action }) => {
      if (action === 'IN') {
        lastInTime = time;
      } else if (action === 'OUT') {
        totalTime += time - lastInTime;
        lastInTime = null;
      }
    });

    if (lastInTime !== null) {
      totalTime += timeToMinutes('23:59') - lastInTime;
    }

    totalParkingTimes.set(carNumber, totalTime);
  }

  const calculateFee = (totalTime) => {
    if (totalTime <= basicTime) {
      return basicFee;
    }
    return basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
  };

  answer = Array.from(totalParkingTimes)
    .sort(([carA], [carB]) => carA.localeCompare(carB))
    .map(([carNumber, totalTime]) => calculateFee(totalTime));

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ],
  ),
); // [14600, 34400, 5000]
console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '16:00 3961 IN',
      '16:00 0202 IN',
      '18:00 3961 OUT',
      '18:00 0202 OUT',
      '23:58 3961 IN',
    ],
  ),
); // [0, 591]
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'])); // [0, 591]
