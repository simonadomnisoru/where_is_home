import React, { Component } from "react";
import Map from "./Map";
import Search from "./Search";
import Criterion from "./Criterion";
import ButtonNavigation from "./ButtonNavigation";
import actionTypes from "./state/actionTypes";
import store from "./state/store";
class App extends Component {
    constructor() {
        super();
        this.state = {
            pageToDisplay: store.getState().pageToDisplay,
        }
        store.subscribe( () => {
            this.setState({ pageToDisplay: store.getState().pageToDisplay });
        });
    }
    renderPage = () => {
        switch (this.state.pageToDisplay) {
            case actionTypes.MAP:
                return <div>
                    <Map />
                    <Search />
                    <ButtonNavigation pageToGo={actionTypes.CRITERION} label="Insert new criterion"/>
                </div>
            case actionTypes.CRITERION:
                return <Criterion />
            default:
                return null;
        }
    }
    render() {

        return (
            <div>
                {this.renderPage()}
            </div>
        );
    }
}

export default App;