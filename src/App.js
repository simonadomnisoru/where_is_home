import React, { Component } from 'react';
import Map from './Map';
import Search from './Search';
import actionTypes from './state/actionTypes';
import store from './state/store';
class App extends Component {
    render() {

        return (
            <div>
                <Map/>
                <Search/>
            </div>
        );
    }
}

export default App;