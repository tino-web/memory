function getRandomArray(length = 20, multiplier=2) {
  if (length % multiplier !== 0) { return []; }

  let arr = [];
  for (let i = 1; i <= length / multiplier; i += 1) {
    arr.push(i);
  }

  arr = Array.from({ length: multiplier }, () => arr).flat();

  // Durstenfeld shuffle for randomizing array
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export default getRandomArray;
