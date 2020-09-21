import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   //do an ajax call and get data
    //   //for optimization purposes
    // }
  }

  //called before component is removed from the DOM
  componentWillUnmount() {
    console.log("Counter - Unmount");
    //opportunity to clean up things like timers or listeners before component is removed
    //reduce memory leakage
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //use object destructuring to reduce redundant code and  look at only count property
    const { value: count } = this.props.counter;
    //return string 'Zero' otherwise return the count from component state
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
