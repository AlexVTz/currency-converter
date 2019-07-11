import React from 'react';
import { connect } from 'react-redux';

import { setCurrenciesToConvert } from '../redux/actions/currencyActionDispatcher';
import './CurrencySelect.css';

class CurrencySelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.default
        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        this.props.setCurrenciesToConvert(this.props.index, this.state.value);
    }

    onChange(event){
        this.setState({
            value: event.target.value
        }, () => {
            this.props.setCurrenciesToConvert(this.props.index, this.state.value);
        })
    }

    render(){
        let currencieValues = this.props.currencies.results;
        let options = [];
        for(let key in currencieValues){
            options.push(
                <option key={key} value={currencieValues[key].id}>{`${currencieValues[key].id}`}</option> 
            );
        }
        return (
            <select className="select" value={this.state.value} onChange={this.onChange}>
                {options}
            </select>
        )
    }
}

const mapStateToProps = state => {
    return {
        currencies: state.currencies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrenciesToConvert: setCurrenciesToConvert
    }
}

const CurrencySelectorComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencySelector)

export default CurrencySelectorComponent;