export const bubbleSort = (array) => {
  const animations = [];
  const sortedArray = [...array];
  const n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push(["compare", j, j + 1]);
      if (sortedArray[j] > sortedArray[j + 1]) {
        animations.push(["swap", j, j + 1]);
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }
  }

  return { animations, sortedArray };
};
