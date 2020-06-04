import React, { Component } from "react";
import Decrement from "./Decrement.js";
import ContactCard from "./ContactCard.js"
import  "./App.css"

class App extends Component{
  render() {
    return(
      <>
      <Decrement start = {999} />
      <ContactCard name = {"Neissa"} mobile = {1234565678} work = {8769873456} email = {"blacklives@matter"} />
      </>
    );
  }
}

export default App;
