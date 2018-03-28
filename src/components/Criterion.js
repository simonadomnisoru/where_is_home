import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import ButtonNavigation from "./ButtonNavigation";
import actionTypes from "../state/actionTypes";
import Validation from "../helpers/Validation";
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button } from "react-bootstrap";

class Criterion extends Component {
    constructor(props, context) {
        super(props, context);
        this.countriesValue = [];
    }

    componentDidMount() {
        this.getCountries();
    }
    getCountries = () => {
        axios.get("http://localhost:3001/contries")
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    this.setState({ countries: response.data });
                }
            });
    }

    sentCriterion = (values) => {
        axios.post("http://localhost:3001/criterion", {
            values: values
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                }
        });
    }
    renderCriterion = () => {
        if (this.state && this.state.countries) {
            return (
                <Row>
                    <Col xs={3}>
                        <ControlLabel>Criterion name</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <FormControl
                            type="text"
                            placeholder="Enter Criterion name"
                        />
                    </Col>
                </Row>
            );
        }
    }

    renderButtons = () => {
        if (this.state && this.state.countries) {
            return (
                <Row>
                    <Col xs={2}>
                        <ButtonNavigation pageToGo={actionTypes.MAP} label="Return to Map" />
                    </Col>
                    <Col xs={2} xsOffset={5}>
                        <Button bsStyle="success" onClick={this.handleSubmit}>Insert Criterion</Button>
                    </Col>
                </Row>
            );
        }
    }
    handleSubmit = () => {
        var isValid = this.countriesValue.filter(function (item, key) {
            return Validation(item);
        })
        console.log(isValid.length, _.size(this.state.countries));
        if (isValid.length === _.size(this.state.countries)) {
            console.log('ready for ajax');
        }
        this.sentCriterion(isValid);
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
            <form id="criterionForm">
                <FormGroup>
                    <Grid>
                        {this.renderCriterion()}
                        {this.renderCountries()}
                        {this.renderButtons()}
                    </Grid>
                </FormGroup>
            </form>
        );
    }
}

export default Criterion;