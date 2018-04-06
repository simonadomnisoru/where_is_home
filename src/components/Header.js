import React from "react";
import ButtonNavigation from "./ButtonNavigation";
import actionTypes from "../state/actionTypes";
export default class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <div id="custom-nav" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-top-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="/en_US/" className="navbar-brand logo" id= "logo-image-wrapper">
                                <img src={require("../style/logo.png")} alt="Where is home" id= "logo-image"/>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse navbar-top-collapse">
                            <ul className="nav navbar-nav navbar-right" id="top_menu">
                                <li>
                                    <ButtonNavigation pageToGo={actionTypes.MAP} className="btn btn-link header-button-text" label="Map"/>
                                </li>
                                <li>
                                    <ButtonNavigation pageToGo={actionTypes.CRITERION} className="btn btn-link header-button-text" label="Criterion"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}