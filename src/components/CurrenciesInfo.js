import React from 'react';
import { connect } from 'react-redux';

import { setCountriesList } from '../redux/actions/currencyActionDispatcher';
import './CurrenciesInfo.css';

class CurrenciesInfo extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.setCountriesList();
    }

    render(){
        let countrieValues = this.props.currenciesInfo.results;
        let squares = [];
        for(let key in countrieValues){
            squares.push(
                <div className="CurrencyCard" key={`country-${countrieValues[key].id}`}>
                    <p className="country">{`${countrieValues[key].name}`}</p>
                    <p>Id: {`${countrieValues[key].currencyId}`}</p>
                    <p>{`${countrieValues[key].currencyName}`}</p>
                    <p className="symbol">{`${countrieValues[key].currencySymbol}`}</p>
                </div>
            );
        }
        return (
            <div style={{display: 'flex', width:'100%', flexWrap: 'wrap'}}>
                {squares}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currenciesInfo: state.currenciesInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCountriesList: setCountriesList
    }
}

const CurrenciesInfoComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrenciesInfo)

export default CurrenciesInfoComponent;