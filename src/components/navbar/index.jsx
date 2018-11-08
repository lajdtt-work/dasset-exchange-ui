import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './style.scss';

// const mapStateToProps = state => {
//     return {};
// };

export default class Navbar extends Component {

    // static propTypes = {};

    // state = {};

    // constructor(props) {
    //     super(props);

    // }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (

            <div className={'navbar container'}>

                <img className={'brand'} src={'https://dasset.co.nz/img/logo/dasset_logo_w.png'} />

                <ul>

                    <li> <a href=""> Products </a> </li>

                    <li> <a href=""> About </a> </li>

                    <li> <a href=""> Fees </a> </li>

                    <li> <a href=""> Contact </a> </li>

                    <li/><li/><li/>

                </ul>

                <ul className={'right'}>

                    <span className={'logIn'}> Log in </span>

                    <Button type={'buttonLogin'} children="Sign Up" />

                </ul>

            </div>

        );
    }
}