import React, { Component } from 'react';
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
]
class App extends Component {

    renderMap = () => {
        google.charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        })
        google.charts.setOnLoadCallback(this.drawRegionsMap);
    }

     drawRegionsMap = () => {
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(google.visualization.arrayToDataTable(data), options);
    }

    componentDidMount() {
        this.renderMap();
    }

    render() {

        return (
            <div id='regions_div'></div>
        );
    }
}

export default App;
