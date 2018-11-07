import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// const mapStateToProps = state => {
//     return {};
// };

export default class ExchangeTool extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <div className="exchangeTool">


                <div className="formRow">
                    <label className="inputLabel"> 1. Enter an ammount in NZD </label>

                    <span class="userInputWrap"> 
                        <input type="text" name="name" className="userInputField" autocomplete="off" placeholder="Up to $100,000"/>
                        <input type="submit" value="NZD" className="submitButton"/>
                    </span>
                </div>
        

                <div className="formRow">

                    <label className="inputLabel"> 2. Select a currency </label>

                    <span class="userInputWrap selectCurrency"> 
                        <select value={this.state.value} onChange={this.handleChange} className="userInputField">
                            <option value="btc">Bitcoin</option>
                            <option value="eth">Ether</option>
                            <option value="xrp">Ripple</option>
                          </select>
                    </span>

                </div>

                <div className="formRow"> 

                    <label className="inputLabel" style={{marginTop:'20px'}}> 3. Submit Your Order </label>

                    <span style={{width:'206px'}}> 
                        <input type="submit" value="Submit Order" className="buyNow"/>
                    </span>

                </div>
                

                {/* 
                <ul>

                    <li className="btc"> BTC </li>

                    <li className="eth"> ETH </li>

                    <li className="xrp"> XRP </li>

                    <li className="neo"> NEO </li>

                </ul>*/}

            </div>

        );
    }
};

