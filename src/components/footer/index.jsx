import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Footer extends Component {

    render() {
        return (

            <div className={'footer'}>

                <div className={'container'}>

                <ul>

                    <li> 
                    	<p> Products </p>
                    </li>

                    <li> 
                    	<p> Resources </p>
                    </li>

                    <li> 
                    	<p> About </p>
                    </li>

					<li> 
                    	<p> Legal </p>
                    </li>

                    <li> 
                    	<p> Contact </p>
                    </li>

                </ul>
                

                </div>
            </div>

        );
    }
}