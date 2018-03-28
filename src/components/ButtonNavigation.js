import React, { Component } from "react";
import {Button } from "react-bootstrap";
import actionTypes from "../state/actionTypes";
import store from "../state/store";
class ButtonNavigation extends Component {
    constructor() {
        super();
    }
    handleClick= () => {
        store.dispatch({ type: this.props.pageToGo });
    }
    render() {
        return (
            <Button bsStyle="info" onClick={this.handleClick}>{this.props.label }</Button>
        );
    }
}

export default ButtonNavigation;