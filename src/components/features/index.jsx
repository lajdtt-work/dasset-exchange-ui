import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Features extends Component {

    render() {
        return (

            <div className={'features'}>

                <div className={'container'}>

                <div id="securitySvg">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 290.2 351.4" enable-background="new 0 0 290.2 351.4">
                        <g class="layer_1">
                            <path fill="#808285" d="M226.9,132c-0.1-44.7-36.4-81-81.1-81c-44.7,0-80.9,36.1-81.1,80.7h0v20.6h28.1v-20.1c0-29.3,23.7-53,53-53
                                    c29.3,0,53,23.7,53,53v79.3h28.1L226.9,132L226.9,132z"/>
                            <path fill="none" d="M145.8,50.5c-29.3,0-53,23.7-53,53h106C198.8,74.2,175.1,50.5,145.8,50.5z"/>
                        </g>
                        <g class="layer_3">
                            <g>
                                <path fill="#FBB040" d="M231.9,299.7H58.7c-9.4,0-17-7.6-17-17V147.5h207.2v135.2C248.9,292.1,241.3,299.7,231.9,299.7z"/>
                                <path fill="#F7941E" d="M248.4,282.7V147.5H145.3v152.2h86.1C240.8,299.7,248.4,292.1,248.4,282.7z"/>
                            </g>
                        </g>
                        <g class="layer_2">
                            <rect x="122.2" y="215.8" fill="#414042" width="46.2" height="16.2"/>
                        </g>
                   </svg>
                </div>

                <div id="securityDescription">
                            
                    <p> Security & Features </p>

                    <ul>
                        <li> Vetted by independent third-party security audits. </li>
                        <li> Registered Financial Services Provider. </li>
                        <li> Secure New Zealand bank to bank transfers. </li>
                        <li> Transparent low fees that are easy to understand with no hidden costs. </li>

                    </ul>

                </div>


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

                </div>
            </div>

        );
    }
}