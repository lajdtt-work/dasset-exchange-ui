import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// const mapStateToProps = state => {
//     return {};
// };

export default class ExchangeTool extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            cryptoCurrency: 'btc'
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleCryptoCurrencyChange = this.handleCryptoCurrencyChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValueChange(event) {
        this.setState({
            value: event.target.value
        });
        console.log(this.state);
    }

    handleCryptoCurrencyChange(event) {
        this.setState({
            cryptoCurrency: event.target.value
        });
        console.log(this.state);
    }
            
    handleSubmit(event) {

        this.state.value == '' ? alert('Please enter an amount of NZD you would like to exhange.') : alert('Your order is for $' + this.state.value + ' of ' + this.state.cryptoCurrency + '.');
        event.preventDefault();
    }

    render() {
        return (

            <div className="exchangeTool">

                <form onSubmit={this.handleSubmit}>

                    <div className="formRow">
                        <label className="inputLabel"> 1. Enter an amount in NZD </label>

                        <span className="userInputWrap"> 
                            <input value={this.state.value} onChange={this.handleValueChange} type={'text'} name={'value'} className={'userInputField'} autoComplete={'off'} placeholder={'Up to $100,000'} max={'100000'} min={'0'} step='0.01'/>
                            <input type="submit" value="NZD" className="submitButton"/>
                        </span>
                    </div>
            

                    <div className="formRow">

                        <label className="inputLabel"> 2. Select a currency </label>

                        <span className="userInputWrap selectCurrency"> 
                            <select value={this.state.cryptoCurrency} onChange={this.handleCryptoCurrencyChange} className={'userInputField'}>
                                <option value={'btc'}>Bitcoin</option>
                                <option value={'eth'}>Ether</option>
                                <option value={'xrp'}>Ripple</option>
                              </select>
                        </span>

                    </div>

                    <div className={'formRow'}> 

                        <label className="inputLabel" style={{marginTop:'20px'}}> 3. Submit Your Order </label>

                        <span style={{width:'206px'}}> 
                            <input type="submit" className="button primary exchangeToolButton" value="Submit Order"/>
                        </span>

                    </div>

                </form>

                <em> <a href=""> For orders over 100K NZD create a bulk trasaction </a> </em>

            </div>

        );
    }
};

