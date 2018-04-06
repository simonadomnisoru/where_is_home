import React from "react";
import Map from "./Map";
import Search from "./Search";
import CriterionForm from "./CriterionForm";
import ButtonNavigation from "./ButtonNavigation";
import Header from "./Header";
import actionTypes from "../state/actionTypes";
import store from "../state/store";
import "../style/style.css";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pageToDisplay: store.getState().pageToDisplay,
        };
        store.subscribe( () => {
            this.setState({ pageToDisplay: store.getState().pageToDisplay });
        });
    }
    renderPage = () => {
        switch (this.state.pageToDisplay) {
            case actionTypes.MAP:
                return <div className="page-content">
                    <Map />
                    <Search />
                    <ButtonNavigation pageToGo={actionTypes.CRITERION} label="Insert new criterion" className="btn btn-info"/>
                </div>;
            case actionTypes.CRITERION:
                return <div className="page-content"><CriterionForm /></div>;
            default:
                return null;
        }
    }
    render() {

        return (
            <div>
                <Header />
                <img src={require("../style/map-cover.png")} id="cover-image" alt=""/>
                {this.renderPage()}
            </div>
        );
    }
}

export default App;