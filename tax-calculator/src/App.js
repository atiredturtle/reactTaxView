import React, { Component } from 'react';
import AppWrapper from './styled';
import TaxCalculator from './components/taxCalculator';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div className="App">
          <TaxCalculator></TaxCalculator>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
