import React, { Component } from "react";

// import { insertionSortAnimations } from "../sortingAlgorithms/insertionSort";
import "./SortingVisualizer.css";

export class SortingVisualizer extends Component {
  render() {
    // const { array } = this.state;
    return (
      // <div>
      <div className="array-container">
        {this.props.array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{
              height: `${value}px`,
              // backgroundColor: INITIAL_COLOR
              backgroundColor: "turquoise"
            }}
          ></div>
        ))}
        {/* </div> */}
      </div>
    );
  }
}

export default SortingVisualizer;

//forEach doesn't return anything (it returns undefined) whereas map function returns a new array (since jsx returns a React.CreateElement- we were not getting anything with using foreach funtion, console logging elements with foreach will work but since it returns undefined , jsx won't return anything)

//slightly broken
// bubbleSort() {
//   const animations = bubbleSortAnimations(this.state.array);
//   console.log(animations);
//   for (let i = 0; i < animations.length; i++) {
//     const arrayBars = document.getElementsByClassName("array-bar");
//     const isColorChange = i % 2 === 0;
//     if (animations[i] !== -1) {
//       if (isColorChange) {
//         // console.log(i);
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//         setTimeout(() => {
//           barOneStyle.backgroundColor = INITIAL_COLOR;
//           // barTwoStyle.backgroundColor = INITIAL_COLOR;
//         }, i * ANIMATION_SPEED_MS + 10);
//       } else {
//         // console.log(i);
//         setTimeout(() => {
//           const [barOneIdx, barTwoIdx, heightOne, heightTwo] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           const barTwoStyle = arrayBars[barTwoIdx].style;
//           barOneStyle.height = `${heightTwo}px`;
//           barTwoStyle.height = `${heightOne}px`;
//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
//     //  else {
//     //   const length = arrayBars.length;
//     //   arrayBars[length - 1].style.backgroundColor = FINAL_COLOR;
//     // }
//   }
// }
