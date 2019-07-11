import React from "react";
import { connect } from 'react-redux';

import { convertCurrency, setTotal } from '../redux/actions/currencyActionDispatcher'
import CurrencySelect from './CurrencySelect';
import './CurrencyConverter.css';

class CurrencyConverter extends React.Component {
    constructor() {
        super();

        this.state = {
            displayValue: null
        }

        this.convertCurrency = this.convertCurrency.bind(this);
        this.setTotalValue = this.setTotalValue.bind(this);
        this.validateNumbers = this.validateNumbers.bind(this);
    }

    convertCurrency() {
        this.props.convertCurrency(this.props.currency1, this.props.currency2);
    }

    /**
     * Method to validate only numbers
     * @param {value} evt 
     */
    validateNumbers(evt) {
        var theEvent = evt || window.event;

        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    setTotalValue(event) {
        this.props.setTotal(event.target.value);
    }

    render() {
        return (
            <div className="CurrencyContainer">
                <div>
                    <button onClick={this.convertCurrency} className="buttonConvert">Get Currency</button>
                </div>
                <CurrencySelect default="MXN" index={1} />
                <div>
                    <span className="converterFont">To</span>
                </div>
                <CurrencySelect default="USD" index={2} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <input type="numbers" onKeyPress={this.validateNumbers} onChange={this.setTotalValue} className="inputForm" />
                    <div style={{ width: '200px', paddingLeft: '10px'}}>
                        <span className="converterFont">{this.props.currencyValue !== 0 ?
                            `Total: ${this.props.currencyValue * this.props.total}` : null}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currency1: state.currency1,
        currency2: state.currency2,
        currencyValue: state.currencyValue,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        convertCurrency: convertCurrency,
        setTotal: setTotal
    }
}

const CurrencyConverterComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyConverter)

export default CurrencyConverterComponent;