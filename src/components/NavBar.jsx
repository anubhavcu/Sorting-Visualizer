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
                disabled
                title="Increase speed and decrease number of array-bars or vice-versa"
              >
                Speed
              </button>
              <button
                type="button"
                className="btn btn-secondary xByFour"
                onClick={() => this.props.speedAndBars(-2)}
              >
                x/4
              </button>
              <button
                type="button"
                className="btn btn-secondary xByTwo"
                onClick={() => this.props.speedAndBars(-1)}
              >
                x/2
              </button>
              <button
                type="button"
                className="btn btn-secondary x"
                onClick={() => this.props.speedAndBars(1)}
              >
                x
              </button>
              <button
                type="button"
                className="btn btn-secondary xMultiplyTwo"
                onClick={() => this.props.speedAndBars(2)}
              >
                2x
              </button>
              <button
                type="button"
                className="btn btn-secondary xMultiplyFour"
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
              // className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.mergeSort()}
            >
              Merge Sort
            </button>
            <button
              className="btn btn-outline-primary m-2"
              // className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.bubbleSort()}
            >
              Bubble Sort
            </button>
            <button
              className="btn btn-outline-primary m-2"
              // className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.quickSort()}
            >
              Quick Sort
            </button>
            <button
              className="btn btn-outline-primary m-2"
              // className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.heapSort()}
            >
              Heap Sort
            </button>
            <button
              className="btn btn-outline-primary"
              // className="btn btn-primary btn-sm m-2"
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
