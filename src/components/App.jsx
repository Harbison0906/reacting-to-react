import React, { Component } from 'react';
import { render } from '@testing-library/react';



class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      text: 'React Lab',
      hasLoaded: false
    };
  }

  inputChange(text) {
    this.setState({ text });
  }

  isLoading() {
    this.setState({ hasLoaded: false });
  }

  toggleHasLoaded () {
    this.setState({ hasLoaded: true });
  }

  loadedScreen() {
    return (
      <div>
        <h1>Hey! My name is {this.props.name}. What's yours?</h1>
        <input
          placeholder={this.state.text}
          onChange={(event) => { this.inputChange(event.target.value) }}
        />
        <br />
        <button onClick={() => this.isLoading()}>Back to Loading</button>
      </div>
    );
  }

  componentDidMount () {
    this.setState({ hasLoaded: true });
  }

  render() {
    if (this.state.hasLoaded) {
      return  <div>{this.loadedScreen()}</div>;
    } else {
      return (
        <div>
          <h1>Loading...</h1>
          <button onClick={() => this.toggleHasLoaded()}>
            Click Me!
      </button>
        </div>
      );
    }
  }
}
export default App;

