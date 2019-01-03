import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    value: '',
    inputValue: []
  }

  lengthCalcHandler = (event) => {
    const lenInput = event.target.value.length;

    this.setState({
      value: event.target.value,
      inputValue: event.target.value.split(""),
      inputLength: lenInput
    });
  }

  removeCharHandler = (charIndex) => {
    const chars = [...this.state.inputValue];
    chars.splice(charIndex,1);
    this.setState({
      value: chars.join(""),
      inputValue: chars
    })
  }
  

  render() {

    let characters = null;

    if (this.state.value.length > 0) {
      characters = (
        <div>
          {this.state.inputValue.map((character,index) => {
            return (
            <Char 
              character={character}
              click={() => this.removeCharHandler(index)}
              key={index}  /> 
            )
          })}
            
          </div> 
      );
    }      
    

    return (
      <div className="App">
        <input type="text" onChange={this.lengthCalcHandler} value={this.state.value}  />  

        <p>
          Length of Input : {this.state.inputLength}
        </p>

        <Validation inputLength={this.state.value.length} />
        <br />
        {characters}

      </div>
    );
  }
}

export default App;
