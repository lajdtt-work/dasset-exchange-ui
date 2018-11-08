import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './style.scss';

export default class Newsbar extends Component {


    render() {
        return (

            <div className={'newsbar'}>

            	<div className={'container'}>

            		<p> Dasset is undergoing some really awesome changes, sign up early for exclusive access!  <span className={'actionButton'}> Learn More </span> </p>

            	</div>

            </div>

        );
    }
}