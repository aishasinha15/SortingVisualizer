import React from "react";
import "../SortingVisualizer/SortingVisualizer.css";

const Header = ({
  resetArray,
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
  heapSort,
  handleSizeChange,
}) => {
  return (
    <div className="header">
      <button onClick={resetArray} className="button">
        New Array
      </button>

      <div className="slider-container">
        <label htmlFor="sizeSlider">Size:</label>
        <input
          type="range"
          id="sizeSlider"
          min="10"
          max="100"
          defaultValue="50"
          step="1"
          onChange={handleSizeChange}
        />
      </div>

      <button onClick={bubbleSort} className="button">
        Bubble Sort
      </button>
      <button onClick={insertionSort} className="button">
        Insertion Sort
      </button>
      <button onClick={selectionSort} className="button">
        Selection Sort
      </button>
      <button onClick={quickSort} className="button">
        Quick Sort
      </button>
      <button onClick={mergeSort} className="button">
        Merge Sort
      </button>
      <button onClick={heapSort} className="button">
        Heap Sort
      </button>
    </div>
  );
};

export default Header;
