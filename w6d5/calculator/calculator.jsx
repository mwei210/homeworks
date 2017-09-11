import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
  }

  setNum1(e){
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }
  //your code here

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={}
      </div>
    );
  }
}

export default Calculator;
