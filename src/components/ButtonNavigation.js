import React from "react";
import store from "../state/store";

export default class ButtonNavigation extends React.PureComponent {
    render() {
        return (
            <button type="button"
                onClick={() => store.dispatch({ type: this.props.pageToGo })}
                className={this.props.className}>
                {this.props.label}
            </button>
        );
    }
}