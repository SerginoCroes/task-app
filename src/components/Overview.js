import React, { Component } from "react";

export class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <ul>
            {this.props.tasks.map((item, index) =>                 
                <li key={index}>{item} 
                <input type='button' value='delete' onClick={this.props.delete.bind(this.props.this, index + 1)}></input>
                </li>
            )}
          </ul>
        )
    }
}