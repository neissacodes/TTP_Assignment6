import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component{
  constructor(props) {
    super(props);
    this.state =  {
      number: props.start
    };
  };

  //Method that decrements the passed value
  handleDecrement = (state) => {
    if(state.number === 0){
      return alert("Value must be greater than 0")
    }
    this.setState({
      number: state.number - 1
    });
  };

  render(){
    return(
      <div>
      {this.state.number}{" "}
      <button onClick={() => this.handleDecrement(this.state)}> Decrement </button>
      </div>
    );
  }
}

//Add a ClassName.prototype
Decrement.propTypes = {
  start : PropTypes.number.isRequired,
};

export default Decrement;
