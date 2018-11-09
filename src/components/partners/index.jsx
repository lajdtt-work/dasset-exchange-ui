import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Partners extends Component {

    render() {
        return (

            <div className={'partners'}>

                <p> Partners </p>

                <div className={'container'}>

                    <br/>

                    <ul>

                        <li> <a href=""> <img src={'https://dasset.co.nz/img/logo/minilogo.png'} /> </a> </li>

                        <li> <a href=""> <img src={'https://dasset.co.nz/images/logos/BNC_mini3.png'} /> </a> </li>

                        <li> <a href=""> <img src={'https://dasset.co.nz/images/logos/bitcoinsaver.png'} style={{height: '23px', transform: 'translateY(-4px)'}}/> </a> </li>

                        <li> <a href=""> <img src={'https://dasset.co.nz/images/logos/f2c_logo_mini2.png'} /> </a> </li>

                        <li> <a href=""> <img src={'https://companies-register.companiesoffice.govt.nz/themes/companies/dist_build/img/logos/co-logo-print.png'} /> </a> </li>


                    </ul>

                </div>
            </div>

        );
    }
}