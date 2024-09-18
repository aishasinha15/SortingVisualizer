import React from "react";
import './SortingVisualizer.css';
import Header from "../components/Header";
import { bubbleSort } from "../components/BubbleSort.js";
import { selectionSort } from "../components/SelectionSort.js";
import { insertionSort } from "../components/InsertionSort.js";
import { mergeSort } from "../components/MergeSort.js";
import { quickSort } from "../components/QuickSort.js";
import { heapSort } from "../components/HeapSort.js";

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            size: 50,
            isSorting: false,
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray = () => {
        const { size } = this.state;
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * (700 - 5 + 1)) + 5);
        }
        this.setState({ array, isSorting: false });
    }

    handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        this.setState({ size: newSize }, this.resetArray);
    }

    

    performSort = (sortFunction) => {
        if (this.state.isSorting) return;

        const array = [...this.state.array];
        const result = sortFunction(array);
        const animations = result.animations;
        this.animateSort(animations);
    }

    animateSort = (animations) => {
        this.setState({ isSorting: true });
        const arrayBars = document.getElementsByClassName('array-bar');

        const animateStep = (step) => {
            if (step >= animations.length) {
                this.setState({ isSorting: false });
                return;
            }

            const [animationType, barOneIdx, barTwoIdx] = animations[step];
            const barOneStyle = arrayBars[barOneIdx].style;

            switch (animationType) {
                case "compare":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'red';
                        if (barTwoIdx !== undefined) {
                            arrayBars[barTwoIdx].style.backgroundColor = 'red';
                        }
                    }, step * 5);

                    setTimeout(() => {
                        barOneStyle.backgroundColor = '';
                        if (barTwoIdx !== undefined) {
                            arrayBars[barTwoIdx].style.backgroundColor = '';
                        }
                    }, (step + 1) * 5);
                    break;

                case "overwrite":
                    setTimeout(() => {
                        barOneStyle.height = `${barTwoIdx}px`;
                        this.setState(prevState => {
                            const newArray = [...prevState.array];
                            newArray[barOneIdx] = barTwoIdx;
                            return { array: newArray };
                        });
                    }, step * 5);
                    break;

                case "swap":
                    setTimeout(() => {
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const tempHeight = barOneStyle.height;
                        barOneStyle.height = barTwoStyle.height;
                        barTwoStyle.height = tempHeight;
                        this.setState(prevState => {
                            const newArray = [...prevState.array];
                            [newArray[barOneIdx], newArray[barTwoIdx]] = [newArray[barTwoIdx], newArray[barOneIdx]];
                            return { array: newArray };
                        });
                    }, step * 5);
                    break;

                default:
                    break;
            }

            setTimeout(() => animateStep(step + 1), 5);
        };

        animateStep(0);
    }


    bubbleSort = () => this.performSort(bubbleSort);
    selectionSort = () => this.performSort(selectionSort);
    insertionSort = () => this.performSort(insertionSort);
    mergeSort = () => this.performSort(mergeSort);
    quickSort = () => this.performSort(quickSort);
    heapSort = () => this.performSort(heapSort);

    render() {
        const { array, isSorting } = this.state;
    
        return (
            <>
                <Header 
                    resetArray={this.resetArray}
                    bubbleSort={this.bubbleSort}
                    insertionSort={this.insertionSort}
                    selectionSort={this.selectionSort}
                    quickSort={this.quickSort}
                    mergeSort={this.mergeSort}
                    heapSort={this.heapSort}
                    handleSizeChange={this.handleSizeChange}
                    isSorting={isSorting}
                />
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style={{height: `${value}px`}}
                        >
                        </div>
                    ))}
                </div>
            </>
        );
    }
}