import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Features extends Component {

    render() {
        return (

            <div className={'features'}>

                <div className={'container'}>

                    <ul>

                        <li> 
                        	<p> Security </p>
                        	<p class={'description'}> 
                        		Vetted by independent third-party security audits. 
								Registered Financial Services Provider.
							</p>
                        </li>

                        {/*<li> 
                        	<p> Advanced Order Types </p>
                        	<em> 
                        		Vetted by independent third-party security audits. 
								Registered Financial Services Provider.
							</em>
                        </li>

                        <li> 
                        	<p> Liquidity </p>
                        	<em> 
                        		Vetted by independent third-party security audits. 
								Registered Financial Services Provider.
							</em>
                        </li>

                        <li> 
                        	<p> Transparent Fees </p>
                        	<em> 
                        		Vetted by independent third-party security audits. 
								Registered Financial Services Provider.
							</em>
                        </li>*/}

                    </ul>

                </div>
            </div>

        );
    }
}