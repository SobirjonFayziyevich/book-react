//@ts-nocheck
import React, { useState } from "react"

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({ color: "blue", model: "Tesla" });
    };

    componentDidMount() {
        console.log("ran componentDidMount");
  // runs after first render (1 chi backenddan malumotlarni chaqirishda)
    };

    componentWillUnmount() {
        console.log("ran componentWillUnmount");
        // runs after component unmount ( malumotlarni yashirilayotgan payytda ishga tushadi.)
    };

    componentDidUpdate() {

        //qiymatga bog"liq holatda amalga oshadi.

    }
    
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} - {this.state.model} - from{""}
            {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  export default Car;