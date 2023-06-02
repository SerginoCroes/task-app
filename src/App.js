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
    //this.removeItem = this.removeItem.bind(this);
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

  removeItem(index) {
    console.log('delete pressed', index);
    this.setState({taskList: this.state.taskList.slice(index, index + 1)});
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
        <Overview tasks={this.state.taskList} delete={this.removeItem} this={this}/>
      </div>
    );
  }
}

export default App;
