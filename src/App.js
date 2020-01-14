import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SortingVisualizer from "./components/SortingVisualizer";
import { getMergeSortAnimations } from "./sortingAlgorithms/mergeSort";
import { bubbleSortAnimations } from "./sortingAlgorithms/bubbleSort";
import { quickSortAnimations } from "./sortingAlgorithms/quickSort";
import { heapSortAnimations } from "./sortingAlgorithms/heapSort";
import "./components/SortingVisualizer.css";
const numberOfElementsInArray = 178;

let ANIMATION_SPEED_MS = 5;

const PRIMARY_COLOR = "green";

const SECONDARY_COLOR = "red";

const FINAL_COLOR = "pink";
const INITIAL_COLOR = "turquoise";
export class App extends Component {
  state = {
    array: []
  };
  speedAndBars = x => {
    // console.log(x);
    if (x === 1) {
      document.querySelector(".x").style.backgroundColor = "red";
      document.querySelector(".xByFour").style.backgroundColor = "grey";
      document.querySelector(".xByTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyFour").style.backgroundColor = "grey";
      ANIMATION_SPEED_MS = 5;
    } else if (x === 2) {
      document.querySelector(".x").style.backgroundColor = "grey";
      document.querySelector(".xByFour").style.backgroundColor = "grey";
      document.querySelector(".xByTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyTwo").style.backgroundColor = "red";
      document.querySelector(".xMultiplyFour").style.backgroundColor = "grey";
      ANIMATION_SPEED_MS = 4;
    } else if (x === 3) {
      document.querySelector(".x").style.backgroundColor = "grey";
      document.querySelector(".xByFour").style.backgroundColor = "grey";
      document.querySelector(".xByTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyFour").style.backgroundColor = "red";
      ANIMATION_SPEED_MS = 2;
    } else if (x === -1) {
      document.querySelector(".x").style.backgroundColor = "grey";
      document.querySelector(".xByFour").style.backgroundColor = "grey";
      document.querySelector(".xByTwo").style.backgroundColor = "red";
      document.querySelector(".xMultiplyTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyFour").style.backgroundColor = "grey";
      ANIMATION_SPEED_MS = 8;
    } else if (x === -2) {
      document.querySelector(".x").style.backgroundColor = "grey";
      document.querySelector(".xByFour").style.backgroundColor = "red";
      document.querySelector(".xByTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyFour").style.backgroundColor = "grey";
      ANIMATION_SPEED_MS = 10;
    } else {
      document.querySelector(".x").style.backgroundColor = "red";
      document.querySelector(".xByFour").style.backgroundColor = "grey";
      document.querySelector(".xByTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyTwo").style.backgroundColor = "grey";
      document.querySelector(".xMultiplyFour").style.backgroundColor = "grey";
      ANIMATION_SPEED_MS = 10;
    }
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
    document.querySelector(".x").style.backgroundColor = "red";
    document.querySelector(".xByFour").style.backgroundColor = "grey";
    document.querySelector(".xByTwo").style.backgroundColor = "grey";
    document.querySelector(".xMultiplyTwo").style.backgroundColor = "grey";
    document.querySelector(".xMultiplyFour").style.backgroundColor = "grey";

    let array = [];
    for (let i = 0; i < numberOfElementsInArray; i++) {
      array.push(this.randomIntFromInterval(10, 645));
    }
    // console.log(array);
    this.setState({ array: array });
    this.resetColor();
  };

  // insertionSort() {
  //   // const [animations1, animations2] = insertionSortAnimations(
  //   //   this.state.array
  //   // );
  //   // console.log(animations1);
  //   // console.log(animations2);
  //   const animations = insertionSortAnimations(this.state.array);

  //   // console.log(animations);
  //   for (let i = 0; i < animations.length; i++) {
  //     const arrayBars = document.getElementsByClassName("array-bar");
  //     const isColorChange = i % 3 !== 2;
  //     if (isColorChange) {
  //       const [barOneIdx, barTwoIdx] = animations[i];
  //       const barOneStyle = arrayBars[barOneIdx].style;
  //       const barTwoStyle = arrayBars[barTwoIdx].style;
  //       const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  //       setTimeout(() => {
  //         barOneStyle.backgroundColor = color;
  //         barTwoStyle.backgroundColor = color;
  //       }, i * ANIMATION_SPEED_MS);
  //     } else {
  //       setTimeout(() => {
  //         const [barOneIdx, newHeight] = animations[i];
  //         const barOneStyle = arrayBars[barOneIdx].style;
  //         barOneStyle.height = `${newHeight}px`;
  //       }, i * ANIMATION_SPEED_MS);
  //     }
  //   }
  // }
  mergeSort = () => {
    //disabling all buttons
    const buttons = document.getElementsByClassName("btn");
    for (let k = 0; k < buttons.length; k++) {
      buttons[k].disabled = true;
    }
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
        //re-enabling all the buttons
        for (let k = 0; k < buttons.length; k++) {
          buttons[k].disabled = false;
        }
      }, ANIMATION_SPEED_MS * animations.length + 1 + i * 10);
      //optional for resetting original color of bars
      // setTimeout(() => {
      //   arrayBars1[i].style.backgroundColor = INITIAL_COLOR;
      // }, ANIMATION_SPEED_MS * animations.length + 1 + i * 12);
    }
  };

  // finalAnimation() {
  //   this.resetColor();
  //   const sortedArrayBars = document.getElementsByClassName("array-bar");
  //   for (let k = 0; k < sortedArrayBars.length; k++) {
  //     const newBarOneStyle = sortedArrayBars[k].style;
  //     setTimeout(() => {
  //       newBarOneStyle.backgroundColor = FINAL_COLOR;
  //       // console.log("hello", k);
  //     }, k * ANIMATION_SPEED_MS);
  //   }
  // }

  bubbleSort = () => {
    //disabling all buttons
    const buttons = document.getElementsByClassName("btn");
    for (let k = 0; k < buttons.length; k++) {
      buttons[k].disabled = true;
    }
    const animations = bubbleSortAnimations(this.state.array);

    // console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i] !== -1) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        //below setTimeOut is to persist the initial color of the bars while moving(to change color of comparing values and resetting them back) (last bar will remain PRIMARY_COLOR )
        setTimeout(() => {
          barOneStyle.backgroundColor = INITIAL_COLOR;
          // barTwoStyle.backgroundColor = INITIAL_COLOR;
        }, i * ANIMATION_SPEED_MS + 10);
      } else {
        //swapping the values
        const [indexOne, indexTwo, barOneHeight, barTwoHeight] = animations[
          i + 1
        ];
        const barOneStyle = arrayBars[indexOne].style;
        const barTwoStyle = arrayBars[indexTwo].style;
        setTimeout(() => {
          barOneStyle.height = `${barTwoHeight}px`;
          barTwoStyle.height = `${barOneHeight}px`;
          // barTwoStyle.backgroundColor = FINAL_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    //for final pink colors of the array bars
    const arrayBarsNew = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBarsNew.length; i++) {
      setTimeout(() => {
        arrayBarsNew[i].style.backgroundColor = "pink";
        //re-enabling all the buttons
        for (let k = 0; k < buttons.length; k++) {
          buttons[k].disabled = false;
        }
      }, ANIMATION_SPEED_MS * animations.length + 1 + i * 10);
      //optional for resetting original color of the array bars
      // setTimeout(() => {
      //   arrayBarsNew[i].style.backgroundColor = INITIAL_COLOR;
      // }, ANIMATION_SPEED_MS * animations.length + 1 + i * 20);
    }
  };
  // quickSort() {
  //   // let pivotIndex = 0;

  //   const animations = quickSortAnimations(this.state.array);
  //   console.log(animations);
  //   for (let i = 0; i < animations.length; i++) {
  //     const arrayBars = document.getElementsByClassName("array-bar");
  //     // arrayBars[pivotIndex].style.backgroundColor = FINAL_COLOR;
  //     if (animations[i] !== -2) {
  //       const [barOne, barTwo] = animations[i];
  //       const barOneStyle = arrayBars[barOne].style;
  //       const barTwoStyle = arrayBars[barTwo].style;
  //       const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  //       setTimeout(() => {
  //         barOneStyle.backgroundColor = color;
  //         barTwoStyle.backgroundColor = color;
  //       }, i * ANIMATION_SPEED_MS + 10 * i);
  //       //below setTimeOut is to persist the initial color of the bars while moving(to change color of comparing values and resetting them back) (last bar will remain PRIMARY_COLOR )
  //       setTimeout(() => {
  //         barOneStyle.backgroundColor = INITIAL_COLOR;
  //         barTwoStyle.backgroundColor = INITIAL_COLOR;
  //       }, i * ANIMATION_SPEED_MS + 50 + 10 * i);
  //     } else {
  //       //either swap or pivot change

  //       const [barOne, barTwo, barOneHeight, barTwoHeight] = animations[i + 1];
  //       if (barTwoHeight !== 0) {
  //         //swap
  //         const barOneStyle = arrayBars[barOne].style;
  //         const barTwoStyle = arrayBars[barTwo].style;
  //         setTimeout(() => {
  //           barOneStyle.height = `${barTwoHeight}px`;
  //           barOneStyle.backgroundColor = PRIMARY_COLOR;
  //           barTwoStyle.height = `${barOneHeight}px`;
  //           // barTwoStyle.backgroundColor = FINAL_COLOR;
  //           barTwoStyle.backgroundColor = SECONDARY_COLOR;
  //         }, i * ANIMATION_SPEED_MS + 10 * i);
  //       } else {
  //         const barOneStyle = arrayBars[barOne].style;
  //         setTimeout(() => {
  //           barOneStyle.backgroundColor = FINAL_COLOR;
  //         }, i * ANIMATION_SPEED_MS + 10);
  //         continue;
  //         //pivot
  //         // pivotIndex = barOne;
  //         // arrayBars[barOne].style.backgroundColor = FINAL_COLOR;
  //         // setTimeout(() => {
  //         //   arrayBars[barOne].style.backgroundColor = FINAL_COLOR;
  //         // }, i * ANIMATION_SPEED_MS + 10);
  //       }
  //     }
  //   }
  // }
  //alternative for quickSort animations
  //color of pivot is to be done
  quickSort = () => {
    //disabling all buttons
    const buttons = document.getElementsByClassName("btn");
    for (let k = 0; k < buttons.length; k++) {
      buttons[k].disabled = true;
    }
    const animations = quickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i] === -2) {
        //pivot or swapping
        const [barOne, barTwo, barOneHeight, barTwoHeight] = animations[i + 1];
        if (barTwoHeight === 0) {
          //pivot
          // const barOneStyle = arrayBars[barOne].style;
          // setInterval(() => {
          //   barOneStyle.backgroundColor = FINAL_COLOR;
          // }, i * ANIMATION_SPEED_MS + 12 * i);
          // continue;
        } else {
          //swapping
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          setTimeout(() => {
            barOneStyle.height = `${barTwoHeight}px`;
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.height = `${barOneHeight}px`;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS + 10 * i);
        }
      } else {
        //traversing
        const [barOne, barTwo] = animations[i];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS + 10 * i);
        //below setTimeOut is to persist the initial color of the bars while moving(to change color of comparing values and resetting them back) (last bar will remain PRIMARY_COLOR )
        setTimeout(() => {
          barOneStyle.backgroundColor = INITIAL_COLOR;
          barTwoStyle.backgroundColor = INITIAL_COLOR;
        }, i * ANIMATION_SPEED_MS + 50 + 10 * i);
      }
    }
    //for final pink color of the bars
    const arrayBarsNew = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBarsNew.length; i++) {
      setTimeout(() => {
        arrayBarsNew[i].style.backgroundColor = FINAL_COLOR;
        //re-enabling all the buttons
        for (let k = 0; k < buttons.length; k++) {
          buttons[k].disabled = false;
        }
      }, animations.length * ANIMATION_SPEED_MS + 5 * i + 10 * animations.length);
    }
  };
  heapSort = () => {
    //disabling all buttons
    // const buttons = document.getElementsByClassName("btn");
    // for (let k = 0; k < buttons.length; k++) {
    //   buttons[k].disabled = true;
    // }
    // console.log(this.state.array);
    // const animations = heapSortAnimations(this.state.array);
    // console.log(animations);
  };
  render() {
    return (
      <div>
        <div className="navBar">
          <NavBar
            genRandomArray={this.genRandomArray}
            mergeSort={this.mergeSort}
            bubbleSort={this.bubbleSort}
            quickSort={this.quickSort}
            heapSort={this.heapSort}
            array={this.state.array}
            speedAndBars={this.speedAndBars}
          />
        </div>
        <div className="mainContent">
          <SortingVisualizer
            array={this.state.array}
            INITIAL_COLOR={this.INITIAL_COLOR}
          />
        </div>
        <div>
          <footer className="page-footer fixed-bottom font-small special-color-dark bg-dark  ">
            <div className="footer-copyright text-center text-white">
              © 2020 Copyright:
              <a href="https://anubhavcu.github.io/portfolio/" target="blank">
                {" "}
                <span className="badge badge-primary"> Anubhav Srivastava</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
