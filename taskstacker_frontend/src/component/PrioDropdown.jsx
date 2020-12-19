import React, { Component,   useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';


class PrioDropdown extends Component 
{

    constructor(props) {
        super(props);
        this.state = {
            prio: 0
        }
    }

    handleSelect = (e) => {
        console.log(e)
        this.setState({prio: e});
        this.props.onSelectPrio(e); 
    }

    render() {
        return (
            <DropdownButton
                id="dropdown-basic-button" 
                title="Select Priority"
                onSelect={this.handleSelect}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">4</Dropdown.Item>
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="6">6</Dropdown.Item>
                <Dropdown.Item eventKey="7">7</Dropdown.Item>
                <Dropdown.Item eventKey="8">8</Dropdown.Item>
                <Dropdown.Item eventKey="9">9</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
            </DropdownButton>
        )
    }

}

export default PrioDropdown