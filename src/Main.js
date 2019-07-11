import React from "react";
import { connect } from 'react-redux';

import TopBar from './components/TopBar';
import ApiError from './components/ApiError';
import CurrencyConverter from './components/CurrencyConverter';
import CurrenciesInfo from './components/CurrenciesInfo';
import { setCurrencies } from './redux/actions/currencyActionDispatcher';
import "./App.css";

class Main extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.setCurrencies();
    }

    render() {
        return (
            <div className="App">
                <TopBar />
                <ApiError error={this.props.apiError} />
                <div className="mainContainer">
                    <h1>Please select the currencies you want to convert</h1>
                    <CurrencyConverter />
                    <h1>Currency List Details</h1>
                    <CurrenciesInfo />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apiError: state.apiError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrencies: setCurrencies
    }
}

const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainApp;