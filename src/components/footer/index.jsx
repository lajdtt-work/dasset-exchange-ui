import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Footer extends Component {

    render() {
        return (

            <div>

            <div className={'footer'}>

                <div className={'container'}>

                    <ul>

                        <li> 
                            <h5> Products </h5>
                            <p> Buy Crypto </p>
                            <p> Trade Crypto </p>
                        </li>

                        <li> 
                            <h5> Resources </h5>
                            <p> FAQ </p>
                            <p> Fees </p>
                            <p> News </p>
                            <p> API </p>
                            
                        </li>

                        <li> 
                            <h5> About </h5>
                            <p> About Dasset </p>
                            <p> Security </p>
                            <p> Notes </p>
                        </li>

                        <li> 
                            <h5> Legal </h5>
                            <p> Private Policy </p>
                            <p> Terms & Conditions </p>
                            <p> AML Policy </p>
                        </li>

                        <li> 
                            <h5> Contact </h5>
                            <p> Contact Dasset </p>
                            <p> Help Desk </p>
                        </li>

                        <li></li>

                    </ul>

                    <br/>

                    <div className={'newsletter'}>

                        <h5> Join our Newsletter </h5>
                        <br />
                        <p> Sign up to receive our weekly newletter on the latest crypto news and more! </p>

                        <form >

                            <span className="userInputWrap"> 
                                <input  type={'email'} name={'email'} className={'userInputField'} autoComplete={'on'} placeholder={'Email Address'} max={'100000'} min={'0'} step='0.01'/>
                                <input type="submit" value="Subscribe" className={'submitButton'}/>
                            </span>

                        </form>

                    </div>

                </div>

            </div>


            <div className={'subFooter'}>

                <div className={'container'}>
                        
                    <ul> 

                        <li> © 2018 Dasset </li>

                        <li> Facebook </li>

                        <li> LinkedIn </li>

                        <li> Discord </li>

                    </ul>

                </div>

            </div>

            </div>

        );
    }
}