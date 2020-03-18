import React, { Component } from 'react';
import { render } from '@testing-library/react';

// const App = (props) => {
//   return ( <h1>Hey! My name is { props.name }. What's yours?</h1> )
// }

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      text: 'React Lab',
      hasLoaded: false
    }
  }

  inputChange(text) {
    this.setState({ text });
  }

  isLoading() {
    this.setState({ hasLoaded: false });
  }

  loadedScreen() {
    this.setState({ hasLoaded: true });
    return (
      <React.Fragment>
        <h1>Hey! My name is {this.props.name}. What's yours?</h1>
        <p>{this.state.text}</p>
        <input
          placeholder={this.state.text}
          onChange={(event) => { this.inputChange(event.target.value) }}
        />
        <br />
  
      </React.Fragment>
  
    );
  }

  render() {
    if (this.hasLoaded) {
      <button onClick={this.loadedScreen} />
    } else {
      return (
        <div>
          <h1>Loading...</h1>
          <button
            onClick={(event) => { this.loadedScreen() }}
          >
            Click Me!
      </button>
        </div>
      );
    }
  }
}
export default App;

