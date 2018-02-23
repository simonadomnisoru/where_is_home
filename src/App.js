import React, { Component } from 'react';

class App extends Component {

    renderMap = () => {
        var google = window.google;
        google.charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        })

        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ]);

            var options = {
                colorAxis: { colors: ['red', 'orange', 'green'] },
                enableRegionInteractivity: true
            };

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }
    }

    render() {
        this.renderMap();
        return (
            <div>
                Hello world
      </div>
        );
    }
}

export default App;
