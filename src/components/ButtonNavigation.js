import React, { Component } from "react";
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
            <button type="button" onClick={this.handleClick} className={this.props.className}>{this.props.label }</button>
        );
    }
}

export default ButtonNavigation;