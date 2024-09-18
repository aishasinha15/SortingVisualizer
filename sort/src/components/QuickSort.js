export const quickSort = (array) => {
  const animations = [];
  const sortedArray = [...array];
  quickSortHelper(sortedArray, 0, sortedArray.length - 1, animations);
  return { animations, sortedArray };
};

function quickSortHelper(array, low, high, animations) {
  if (low < high) {
    let pi = partition(array, low, high, animations);
    quickSortHelper(array, low, pi - 1, animations);
    quickSortHelper(array, pi + 1, high, animations);
  }
}

function partition(array, low, high, animations) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    animations.push(["compare", j, high]);
    if (array[j] < pivot) {
      i++;
      animations.push(["swap", i, j]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  animations.push(["swap", i + 1, high]);
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}
