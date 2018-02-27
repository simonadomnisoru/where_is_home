import React, { Component } from 'react';
import axios from 'axios';
import Credentials from './credentials.js';

var google = window.google;
var options = {
    colorAxis: { colors: ['red', 'orange', 'green'] }
};
var data = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
];
class Map extends Component {
    constructor(props) {
        super(props);
    }

    renderMap = () => {
        google.charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': Credentials.GeoChartKey
        })
        google.charts.setOnLoadCallback(this.drawRegionsMap);
    }
    drawRegionsMap = () => {
        var chart = new google.visualization.GeoChart(document.getElementById('map'));
        axios.get('http://localhost:3001/mapData/')
            .then(res => {
               console.log(res);
        })
        chart.draw(google.visualization.arrayToDataTable(data), options);
    }
    componentDidMount() {
        this.renderMap();
    }

    render() {

        return (
            <div id="rotate">
                <div id="map"></div>
            </div>
        );
    }
}

export default Map;
