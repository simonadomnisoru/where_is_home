import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button, Row, Grid, Col } from 'react-bootstrap';
class Search extends Component {

    render() {

        return (
            <div id='search_box'>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4}>
                            <DropdownButton
                                bsStyle='default'
                                title='Select your criteria'
                                id='category'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3">Active Item</MenuItem>
                            </DropdownButton>

                        </Col>
                        <Col md={4}>
                            <DropdownButton
                                bsStyle='default'
                                title='Select value'
                                id='subcategory'>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3">Active Item</MenuItem>
                            </DropdownButton>
                        </Col>
                        <Col md={1}>
                            <Button bsStyle="success">Apply</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default Search;