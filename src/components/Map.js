import React, { Component } from "react";
import axios from "axios";
import Credentials from "../helpers/credentials.js";

var google = window.google;
var options = {
    colorAxis: { colors: ["red", "orange", "green"] }
};

var formatJson = (json) => {
    var keys = Object.keys(json);
    var array = [];
    keys.forEach(function (key, index){
        var value = json[key];
        if(value !== undefined) {
            array.push([key, value]);
        }
    })
    return array;
};
class Map extends Component {
    constructor(props) {
        super(props);
    }

    renderMap = () => {
        google.charts.load("current", {
            "packages": ["geochart"],
            "mapsApiKey": Credentials.GeoChartKey
        });
        google.charts.setOnLoadCallback(this.drawRegionsMap);
    }

    drawRegionsMap = () => {
        var chart = new google.visualization.GeoChart(document.getElementById("map"));
        axios.get("http://localhost:3001/data")
            .then((res) => {
                var dataTable = formatJson(res.data);
                chart.draw(google.visualization.arrayToDataTable(dataTable), options);
            });
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
