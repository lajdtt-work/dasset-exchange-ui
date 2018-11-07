import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

            <div className="container navbar">

                <img className="brand" src='https://dasset.co.nz/img/logo/dasset_logo_w.png' />

                <ul>

                    <li> Products </li>

                    <li> About </li>

                    <li> Fees </li>

                    <li> Contact </li>

                </ul>

            </div>

        );
    }
}