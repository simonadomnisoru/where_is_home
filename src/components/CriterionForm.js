import React from "react";
import axios from "axios";
import _ from "lodash";
import ButtonNavigation from "./ButtonNavigation";
import CriterionPerCountry from "./CriterionPerCountry";
import actionTypes from "../state/actionTypes";
import Validation from "../helpers/Validation";
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button } from "react-bootstrap";

class CriterionForm extends React.Component {
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

    renderButtons = () => {
        return (
            <Row>
                <Col xs={2}>
                    <ButtonNavigation pageToGo={actionTypes.MAP} label="Return to Map" className="btn btn-info"/>
                </Col>
                <Col xs={2} xsOffset={5}>
                    <Button bsStyle="success" onClick={this.handleSubmit} className="btn btn-success">Insert Criterion</Button>
                </Col>
            </Row>
        );
    }
    handleSubmit = () => {
        let isValid = this.countriesValue.filter(function (item, key) {
            return Validation(item.value);
        });
        if (isValid.length === _.size(this.state.countries)) {
            console.log("ready for ajax");
        }
        this.sentCriterion(this.countriesValue);
    }

    setValue = (element) => {
        this.countriesValue[element.key] = element;
    }

    renderCountries = () => {
        const listItems = _.map(this.state.countries, (value, key) => {
            return <CriterionPerCountry
                key={value.key}
                id={value.key}
                name={value.name}
                setValue={this.setValue}
            />;
        });
        return (
            <div>{listItems}</div>
        );
    }

    renderForm = () => {
        if (this.state && this.state.countries) {
            return (
                <Grid>
                    {this.renderCriterion()}
                    {this.renderCountries()}
                    {this.renderButtons()}
                </Grid>
            );
        }
    }

    render() {
        return (
            <form id="criterionForm">
                <FormGroup>
                    {this.renderForm()}
                </FormGroup>
            </form>
        );
    }
}

export default CriterionForm;