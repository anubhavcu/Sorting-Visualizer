import React, { Component } from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSort";
import { bubbleSortAnimations } from "../sortingAlgorithms/bubbleSort";
import { insertionSortAnimations } from "../sortingAlgorithms/insertionSort";
import "./SortingVisualizer.css";

// const numberOfElementsInArray = 175;
const numberOfElementsInArray = 100;

const ANIMATION_SPEED_MS = 10;
// Change this value for the speed of the animations.

// Change this value for the number of bars (value) in the array.
// const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "green";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

const FINAL_COLOR = "pink";
const INITIAL_COLOR = "turquoise";

export class SortingVisualizer extends Component {
  state = {
    array: []
  };
  componentDidMount() {
    this.genRandomArray();
  }

  resetColor() {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = INITIAL_COLOR;

      // console.log(arrayBars[i].style.backgroundColor);
    }
  }
  randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  genRandomArray = () => {
    // document.querySelectorAll(".btn").forEach(elem => (elem.disabled = false));
    let array = [];
    for (let i = 0; i < numberOfElementsInArray; i++) {
      array.push(this.randomIntFromInterval(10, 700));
    }
    // console.log(array);
    this.setState({ array: array });
    this.resetColor();
  };

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    // console.log(this.state.array);
    // console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      // console.log((i, animations[i]));

      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          // console.log(barOneIdx, newHeight);
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //below setTimeOut is for final color of the bars
          // setTimeout(() => {
          //   this.finalAnimation();
          // }, animations.length * ANIMATION_SPEED_MS + 1);
        }, i * ANIMATION_SPEED_MS);
      }
    }
    //for final pink color of the array bars
    const arrayBars1 = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars1.length; i++) {
      setTimeout(() => {
        arrayBars1[i].style.backgroundColor = "pink";
      }, ANIMATION_SPEED_MS * animations.length + 1 + i * 10);
      //optional for resetting original color of bars
      // setTimeout(() => {
      //   arrayBars1[i].style.backgroundColor = INITIAL_COLOR;
      // }, ANIMATION_SPEED_MS * animations.length + 1 + i * 12);
    }
  }

  render() {
    const { array } = this.state;
    return (
      // <div>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{
              height: `${value}px`,
              backgroundColor: INITIAL_COLOR
            }}
          ></div>
        ))}
        {/* </div> */}
        <div
        // className="buttons"
        >
          <button
            className="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.genRandomArray()}
          >
            Generate New Array
          </button>
          <button
            className="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </button>
          <button
            className="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            className="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </button>
          <button
            className="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.genRandomArray()}
          >
            Heap Sort
          </button>
          <button
            className="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.genRandomArray()}
          >
            Insertion Sort
          </button>
        </div>
      </div>
    );
  }
}

export default SortingVisualizer;
