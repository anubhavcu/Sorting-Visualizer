import React, { Component } from "react";
// import PropTypes from "prop-types";

class NavBar extends Component {
  // componentDidMount() {
  //   this.props.genRandomArray();
  // }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          {/* <nav className="navbar navbar-light bg-light mb-3"> */}
          {/* icon not working */}
          {/* <a href="https://google.com" target="blank">
            <img src="../../public/logo192.png" width="30" height="30" alt="" />
          </a> */}
          <div>
            <h1 className="text-white">Sorting Visualizer </h1>
          </div>

          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-secondary"
                // disabled
                title="Increase speed and decrease number of array-bars or vice-versa"
              >
                Speed
              </button>
              <button
                type="button"
                className="btn btn-secondary xByFour"
                title="Decrease in speed and decrease in number of array bars"
                onClick={() => this.props.speedAndBars(-2)}
              >
                x/4
              </button>
              <button
                type="button"
                className="btn btn-secondary xByTwo"
                title="Decrease in speed by half and decrease in number of bars"
                onClick={() => this.props.speedAndBars(-1)}
              >
                x/2
              </button>
              <button
                type="button"
                className="btn btn-secondary x"
                title="Default speed and number of array bars"
                onClick={() => this.props.speedAndBars(1)}
              >
                x
              </button>
              <button
                type="button"
                className="btn btn-secondary xMultiplyTwo"
                title="Increase speed 2x and increase in number of array-bars "
                onClick={() => this.props.speedAndBars(2)}
              >
                2x
              </button>
              <button
                type="button"
                className="btn btn-secondary xMultiplyFour"
                title="Increase speed 4x and increase in number of array bars"
                onClick={() => {
                  this.props.speedAndBars(3);
                }}
              >
                4x
              </button>
            </div>
          </div>
          <div>
            <button
              className="btn btn-outline-danger m-2"
              // className="btn btn-primary btn-sm m-2"
              title="Generate a new random array"
              onClick={() => {
                // disabled = true;
                this.props.genRandomArray(178, 1, false);
              }}
              // disabled={true}
            >
              Generate New Array
            </button>
            <button
              className="btn btn-outline-primary m-2"
              title="Time- O(nlog(n)) & Space-O(n)"
              // className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.mergeSort()}
            >
              Merge Sort
            </button>
            <button
              className="btn btn-outline-primary m-2"
              title="Time(worst)-O(n^2)||Time(best)-O(n)||Space-O(1)"
              // className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.bubbleSort()}
            >
              Bubble Sort
            </button>
            <button
              className="btn btn-outline-primary m-2"
              // className="btn btn-primary btn-sm m-2"
              title="Time(worst)-O(n^2)||Time(best)-O(nlog(n))||Space-O(log(n))"
              onClick={() => this.props.quickSort()}
            >
              Quick Sort
            </button>
            <button
              className="btn btn-outline-primary m-2"
              // className="btn btn-primary btn-sm m-2"
              title="Time-O(nlog(n))||Space-O(1)"
              onClick={() => this.props.heapSort()}
            >
              Heap Sort
            </button>
            <button
              disabled="true"
              className="btn btn-outline-primary"
              // className="btn btn-primary btn-sm m-2"
              title="Time(worst)-O(n^2)||Time(best)-O(n)||Space-O(1)"
              onClick={() => this.props.genRandomArray(178, 1, false)}
            >
              Insertion Sort
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
