export const insertionSort = (array) => {
  const animations = [];
  const sortedArray = [...array];
  const n = sortedArray.length;

  for (let i = 1; i < n; i++) {
    let key = sortedArray[i];
    let j = i - 1;
    animations.push(["compare", j, i]);
    while (j >= 0 && sortedArray[j] > key) {
      animations.push(["swap", j + 1, j]);
      sortedArray[j + 1] = sortedArray[j];
      j = j - 1;
      if (j >= 0) animations.push(["compare", j, i]);
    }
    sortedArray[j + 1] = key;
  }

  return { animations, sortedArray };
};
