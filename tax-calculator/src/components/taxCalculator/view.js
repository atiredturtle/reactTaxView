import React, { Component } from 'react';
import TextBox from '../textBox';
import TaxBrackets from '../taxBrackets';

class TaxCalulator extends Component{
  constructor(props){
    super(props);
    this.state = {inputAmount: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({ inputAmount: value });
  }

  render(){
    const {
      inputAmount
    } = this.state;
    
    return (
      <div>
        <TextBox sendChange={this.handleChange}></TextBox>
        inputAmount = ${inputAmount}
        <TaxBrackets></TaxBrackets>
      </div>
    );
  }
}

export default TaxCalulator;

