import React,  {Component} from 'react';
import Decrement from "./Decrement.js"
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
      <Decrement start = {10} />
      <Decrement start = {999} />
      </>
    );
  }
}

export default App;
