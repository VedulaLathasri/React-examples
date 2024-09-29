import React, { Component } from 'react'

// create a counter with class component
// increment value by 1
// increment value by user defined number
class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }
    incrementCount = () => {
          this.setState({
              count: this.state.count+1
          })
    }

    incrementByValue = () =>{
        console.log(document.getElementById('inputId').value);
        this.setState({
          count: this.state.count + Number(document.getElementById('inputId').value)
      })
    }
    render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input id='inputId' type='number' ></input>
        <button onClick={this.incrementByValue}> Increment By value</button>
      </div>
    )
  }
}

export default ClassCounter