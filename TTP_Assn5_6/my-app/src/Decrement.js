import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: props.start
    };
  }

  //handleDecrement method
  handleDecrement = (state) => {
    if(state.number === 0){
      return alert("Number must be greater than 0")
    }
    this.setState({
      number : state.number - 1
    });
  };

  //Render Function
  render() {
    return(
      <div>
        {this.state.number}{" "}
        <button onClick={
          () => this.handleDecrement(this.state)
        }> Decrement </button>
      </div>
    );
  }
}
  //Add a classNmae PropTypes
  Decrement.propTypes = {
    start : PropTypes.number.isRequired,
};
export default Decrement;
