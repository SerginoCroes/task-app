import React, { Component } from "react";
import { Overview } from "./components/Overview";

class App extends Component {

  constructor() {
    super();

    this.state = {
      taskList: [],
      textField: ''
    };

    this.buttonPress = this.buttonPress.bind(this);
  }

  textChange(value) {
    this.setState({textField: value});
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.buttonPress();
    }
  }

  buttonPress() {
    this.setState({taskList: [...this.state.taskList, this.state.textField]});
    this.setState({textField: ''});
  }

  render() {
    return (
      <div className="App">
        <form>
          <input 
            type='text' 
            value={this.state.textField} 
            onChange={e => this.textChange(e.target.value)}
            onKeyDown={e => this.onEnter(e)} />
          <input 
            type='button' 
            value='submit task' 
            onClick={this.buttonPress} />
        </form>
        <ul>
          {this.state.taskList.map((item, index) => <Overview key={index} task={item}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
