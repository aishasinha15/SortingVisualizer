export const selectionSort = (array) => {
  const animations = [];
  const sortedArray = [...array];
  const n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      animations.push(["compare", j, minIdx]);
      if (sortedArray[j] < sortedArray[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      animations.push(["swap", i, minIdx]);
      [sortedArray[i], sortedArray[minIdx]] = [
        sortedArray[minIdx],
        sortedArray[i],
      ];
    }
  }

  return { animations, sortedArray };
};
