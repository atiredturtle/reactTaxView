import React, { Component } from 'react';
import TextBox from '../textBox';
import TaxBracketsTable from '../taxBracketsTable';
import TaxBrackets from '../../utils/taxBrackets';

class TaxCalulator extends Component{
  constructor(props){
    super(props);
    this.state = { inputAmount: 0, brackets: TaxBrackets };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({ inputAmount: value });
  }

  getCurrBracket(){
    const { brackets, inputAmount} = this.state;

    const lowerBrackets = brackets.filter(b => b.taxableIncome <= inputAmount);
    const topBracket = lowerBrackets[lowerBrackets.length - 1];
    return topBracket;
  }

  getFractionalTax(){
    const { inputAmount } = this.state;
    const { taxableIncome, perDollarTax } = this.getCurrBracket();
  
    const taxableFloor = taxableIncome - 1;
    return (inputAmount - taxableFloor) * perDollarTax;
  }

  getLumpTax(){
    const { lumpTax } = this.getCurrBracket();
    return lumpTax;
  }

  getTax(){
    return this.getFractionalTax() + this.getLumpTax();
  }

  render(){
    const {
      inputAmount
    } = this.state;
    
    const remaining = inputAmount - this.getTax();
    const remainingPercent = ((remaining/inputAmount) * 100).toFixed(2);
    return (
      <div>
        <TextBox sendChange={this.handleChange}></TextBox>
        <div>inputAmount = ${inputAmount}</div>
        <div>Lump Tax = ${this.getLumpTax()} +</div>
        <div>Fractional Tax = ${this.getFractionalTax()}</div>
        <div>Total Tax = ${this.getTax()}</div>
        <div>Amount remaining = ${remaining}</div>
        <div>Effective percentage = {(100-remainingPercent).toFixed(2)}%</div> 
        
        
        <TaxBracketsTable currAmount={inputAmount} currBracket={this.getCurrBracket()} brackets={this.state.brackets}></TaxBracketsTable>
      </div>
    );
  }
}

export default TaxCalulator;
