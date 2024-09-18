export const heapSort = (array) => {
  const animations = [];
  const sortedArray = [...array];
  const n = sortedArray.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(sortedArray, n, i, animations);

  for (let i = n - 1; i > 0; i--) {
    animations.push(["swap", 0, i]);
    [sortedArray[0], sortedArray[i]] = [sortedArray[i], sortedArray[0]];
    heapify(sortedArray, i, 0, animations);
  }

  return { animations, sortedArray };
};

function heapify(array, n, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n) {
    animations.push(["compare", left, largest]);
    if (array[left] > array[largest]) largest = left;
  }

  if (right < n) {
    animations.push(["compare", right, largest]);
    if (array[right] > array[largest]) largest = right;
  }

  if (largest !== i) {
    animations.push(["swap", i, largest]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest, animations);
  }
}
