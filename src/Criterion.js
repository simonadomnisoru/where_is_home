import React, { Component } from "react";
import axios from "axios";
import ButtonNavigation from "./ButtonNavigation";
import actionTypes from "./state/actionTypes";
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button } from "react-bootstrap";
class Criterion extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
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
            var keys = Object.keys(this.state.countries);
            const listItems = keys.map((key) =>
                <Grid key={key}>
                    <Row>
                        <Col md={2}>
                            <ControlLabel>{this.state.countries[key]}</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl />
                            <FormControl.Feedback />
                        </Col>
                    </Row>
                </Grid>
            );
            return (
                <div>{listItems}</div>
            );
        }
    }
    render() {
        return (
            <form>
                <FormGroup controlId="formCriterion">
                    {this.renderCriterion()}
                    <ButtonNavigation pageToGo={actionTypes.MAP} label="Return to Map"/>
                    <Button bsStyle="success"  onClick={this.handleSubmit}>Insert Criterion</Button>
                </FormGroup>
            </form>
        );
    }
}

export default Criterion;