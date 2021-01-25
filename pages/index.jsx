import React, { useState } from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/actions/counterActions";

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

class App extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
