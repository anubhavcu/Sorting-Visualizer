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
          <h1 className="text-white">
            Sorting Visualizer{" "}
            {/* <small
              className="text-muted"
              className="h5"
              className="text-secondary"
            >
              made by{" "}
              <a href="https://anubhavcu.github.io/portfolio" target="blank">
                <small className="text-primary">Anubhav </small>
              </a>
            </small>{" "} */}
          </h1>

          <div
          // className="buttons"
          >
            <button
              className="btn btn-outline-danger m-2"
              // className="btn btn-primary btn-sm m-2"
              onClick={() => {
                // disabled = true;
                this.props.genRandomArray();
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
              onClick={() => this.props.genRandomArray()}
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
