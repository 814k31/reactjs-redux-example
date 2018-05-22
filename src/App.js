import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { incrementTally } from './actions/TallyActions';


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Redux Tally */}
        <h1>{this.props.tally}</h1>
        {/* Call increment action */}
        <button onClick={() => this.props.incrementTally()}>Increment</button>
      </div>
    );
  }
}
// Map the redux state to the components props
const mapStateToProps = state => state;

// Map the redux actions to the components props
const mapDispatchToProps = dispatch => {
  return {
    incrementTally: () => dispatch(incrementTally())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
