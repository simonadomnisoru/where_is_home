import React, { Component } from "react";
class Header extends Component {
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
                                <img src={require('../style/logo.png')} alt="Where is home" id= "logo-image"/>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse navbar-top-collapse">
                            <ul className="nav navbar-nav navbar-right" id="top_menu">
                                <li>
                                    <a href="/en_US/">
                                        <span className="header-button-text">Map</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/en_US/page/leistungen">
                                        <span className="header-button-text">Criterion</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;