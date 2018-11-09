import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class About extends Component {

    render() {
        return (

            <div className={'about'}>

                <div className={'container'}>
                    
                    <div className={'left'}>

                        <h1> New Zealand's Best Digital Currency Exchange </h1>
                        
                        <p> Value is going exponentially digital and New Zealanders should have access at their fingertips. </p>

                        <ul>

                            <li> New Zealand owned and operated. </li>

                            <li> Easily buy or sell digital currency or use our advanced enterprise matching engine. Something for everyone. </li>

                            <li> The leading platform for professional digital currency traders. </li>

                            <li> Throughput of over 1 million transactions per second. </li>

                        </ul>

                    </div>

                    <div className={'right'}> 

                        <img src={'https://dasset.co.nz/images/unsplash/exchange_graphic.png'} />

                    </div>

                </div>

            </div>

        );
    }
}