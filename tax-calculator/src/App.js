import React, { Component } from 'react';
import TextBox from './components/textBox';
import AppWrapper from './styled';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div className="App">
          Test
          <TextBox/>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
