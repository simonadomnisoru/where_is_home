import React, { Component } from "react";
import Validation from "../helpers/Validation";
import { ControlLabel, FormControl, Col, Grid, Row, HelpBlock } from "react-bootstrap";

class CriterionCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNameInput: "",
            classNameTextValidation: "error-text-hidden"
        };
    }

    handleChange = (element) => {
        var key = element.dataset.key;
        var value = element.value;
        if (!Validation(value)) {
            this.setState({ classNameInput: "input-error" });
            this.setState({ classNameTextValidation: "error-text-show" });
        }
        else {
            this.setState({ classNameInput: "" });
            this.setState({ classNameTextValidation: "error-text-hidden" });
            this.props.setValue({ key : key, value : value});
        }
    }

    renderCountries = () => {
        return (
            <Row key={this.props.id}>
                <Col xs={3}>
                    <ControlLabel>{this.props.name}</ControlLabel>
                </Col>
                <Col xs={4}>
                    <FormControl data-key={this.props.id}
                        onChange={(e) => this.handleChange(e.target)}
                        className={this.state.classNameInput} />
                     <HelpBlock className={this.state.classNameTextValidation}>
                        Please insert a value like "Yes", "No" or a number.
                     </HelpBlock>
                </Col>
            </Row>
        );
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