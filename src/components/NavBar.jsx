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
          <h1>Sorting Visualizer </h1>
          <a
            className="navbar-brand"
            href="https://anubhavcu.github.io/portfolio/"
            target="blank"
          >
            <p>
              <span className="badge badge-secondary">
                {/* {this.props.totalItems} */}
                Mady by:- Anubhav Srivastava
              </span>
            </p>
          </a>
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
