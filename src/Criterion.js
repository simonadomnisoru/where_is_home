import React, { Component } from "react";
import axios from "axios";
import ButtonNavigation from "./ButtonNavigation";
import actionTypes from "./state/actionTypes";
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button } from "react-bootstrap";
class Criterion extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            countriesValue: []
        };
    }

    componentDidMount() {
        this.getCountries();
    }
    getCountries = () => {
        axios.get("http://localhost:3001/contries")
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ countries: response.data });
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

    renderCountries = () => {
        if (this.state && this.state.countries) {
            var keys = Object.keys(this.state.countries);
            const listItems = keys.map((key) =>
                <Row key={key}>
                    <Col xs={3}>
                        <ControlLabel>{this.state.countries[key]}</ControlLabel>
                    </Col>
                    <Col xs={4}>
                        <FormControl id={"country_" + key}
                            value={this.state.countriesValue[key]} />
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