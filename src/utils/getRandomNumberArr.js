function getRandomNumberArr(length = 20, maxFlips = 2) {
  if (length % maxFlips !== 0) { return []; }

  let arr = [];
  for (let i = 1; i <= length / maxFlips; i += 1) {
    arr.push(i);
  }

  arr = Array.from({ length: maxFlips }, () => arr).flat();

  // Durstenfeld shuffle for randomizing array
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const arrElements = arr.map((element, index) => ({
    position: index + 1,
    tileId: element,
    isSelected: false,
    isMatched: false,
  }));

  return arrElements;
}

export default getRandomNumberArr;
