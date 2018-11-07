import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// const mapStateToProps = state => {
//     return {};
// };

export default class ExchangeTool extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <div className="exchangeToolContainer">

            </div>

        );
    }
};

