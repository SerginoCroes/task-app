import React, { Component } from "react";
import { Overview } from "./components/Overview";

class App extends Component {

  constructor() {
    super();

    this.state = {
      taskList: [],
      textField: ''
    };

    this.submitPress = this.submitPress.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  textChange(value) {
    this.setState({ textField: value });
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submitPress();
    }
  }

  submitPress() {
    this.setState({ taskList: [...this.state.taskList, this.state.textField] });
    this.setState({ textField: '' });
  }

  removeItem(index) {
    const tempTaskList = [...this.state.taskList];
    tempTaskList.splice(index, 1);
    this.setState({ taskList: tempTaskList });
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
            onClick={this.submitPress} />
        </form>
        <Overview tasks={this.state.taskList} remove={this.removeItem} />
      </div>
    );
  }
}

export default App;
