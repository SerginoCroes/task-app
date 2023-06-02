import React, { Component } from "react";

export class Overview extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <li>{this.props.task}</li>
        )
    }
}