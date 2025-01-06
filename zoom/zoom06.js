function generateCombination(arr) {
  const results = [];

  function solution(value, otherValues) {
    results.push(value);
    for (let i = 0; i < otherValues.length; i++) {
      solution([...value, otherValues[i]], otherValues.slice(i + 1));
    }
  }

  solution([], arr);
  return results;
}

console.log(generateCombination([1, 2, 3]));
