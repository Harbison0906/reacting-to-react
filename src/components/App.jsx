import React, { Component } from 'react';
import { render } from '@testing-library/react';

// const App = (props) => {
//   return ( <h1>Hey! My name is { props.name }. What's yours?</h1> )
// }

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      text: 'React Lab'
    }
  }

  inputChange = (text) => {
    this.setState({ text });
  }

  render() {
    return (
      <div>
        <h1>Hey! My name is {this.props.name}. What's yours?</h1>
        <p>{this.state.text}</p>
        <input
          placeholder={this.state.text}
          onChange={(event) => {this.inputChange(event.target.value) }}
        />
      </div>

    );
  }

}
export default App;