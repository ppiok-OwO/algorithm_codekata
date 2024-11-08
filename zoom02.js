// abc->bca->cab로 출력

function spinStr(str) {
  let arr = [];
  arr.push(...str);
  console.log(...arr);

  for (let i = 0; i < arr.length - 1; i++) {
    let shiftedChar = arr.shift()[0];
    let result = arr.push(shiftedChar);
    console.log(...arr);
  }
}

spinStr("abc");
