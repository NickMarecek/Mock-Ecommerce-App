import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //lifecycle hooks

  //ioitial constructor call check
  //place to initialize properties of class
  constructor() {
    super();
    console.log("App - Constructor");
  }

  //called after component is rendered into the DOM
  //can use this area to make ajax calls and collect data from server
  componentDidMount() {
    //ajax call
    //this.setState({newData});

    console.log("App - Mounted");
  }

  /*do not update state directly (cannot remove counter from array above) 
  instead, create new array without given counter and call setState method of component
  and let react update the state */
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  /*this function uses the spread method (...) to clone the array of counters
  finds the index of the counter that was passed
  clones the counter object and increments its value 
  calls the setState method to update the state of the component*/
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  //third step in lifecycle hook
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
