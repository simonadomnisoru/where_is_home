import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import ButtonNavigation from "./ButtonNavigation";
import actionTypes from "../state/actionTypes";
import Validation from "../helpers/Validation";
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button } from "react-bootstrap";

class CriterionCountry extends Component {
    constructor(props, context) {
        super(props, context);
        this.countriesValue = [];
    }

    handleChange = (element) => {
        var key = element.dataset.key;
        var value = element.value;
        if (!Validation(value)) {
            //show validation
        }
        this.countriesValue[key] = value;
    }

    renderCountries = () => {
        if (this.state && this.state.countries) {
            var keys = Object.keys(this.state.countries);
            const listItems = keys.map((key) =>
                <Row key={key}>
                    <Col xs={3}>
                        <ControlLabel>{this.state.countries[key]}</ControlLabel>
                    </Col>
                    <Col xs={4}>
                        <FormControl id={"country_" + key} data-key={key}
                            onChange={(e) => this.handleChange(e.target)} />
                        <FormControl.Feedback />
                    </Col>
                </Row>
            );
            return (
                <div>{listItems}</div>
            );
        }
    }

    render() {
        return (
            <Grid>
                {this.renderCountries()}
            </Grid>
        );
    }
}

export default CriterionCountry;