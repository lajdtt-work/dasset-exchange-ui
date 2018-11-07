import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// const mapStateToProps = state => {
//     return {};
// };

export default class Home extends Component {

    render() {
        return (

            <div className="container">

            	<div className="landingText">
	                
	                <p className="main"> Where Kiwis exchange </p>

	                <p className="subMain"> Buy, sell, and trade Bitcoin, Ether and all major crypto currencies through one of New Zealand's authorized crypto exchanges. </p>

	                <span className="getStarted"> Get Started </span>

	                <p className="disclaimer"> By continuing you agree with all <a href="">terms and conditions </a> </p>

	            </div>

            </div>

        );
    }
}