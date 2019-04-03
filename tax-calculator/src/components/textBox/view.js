import React, { Component } from 'react';

class TextBox extends Component{
  constructor(props){
    super(props);
    this.state ={ value: 0 };

    this.sendChange = this.props.sendChange;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    const numValue = value === '' ? 0 : Number(value);
    if (!isNaN(numValue)) {
      this.setState({ value: numValue });
      this.sendChange(numValue);
    }
  }
  render(){
    return( 
      <div>
       <input type='text' value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default TextBox;
