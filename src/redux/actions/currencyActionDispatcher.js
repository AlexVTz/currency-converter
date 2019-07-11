import store from '../../store';
import { currencyConstants } from '../constants';
import { getCurrencies, getCurrencyValue, getCountriesList } from '../../server/api';

export function setCurrencies() {

    getCurrencies().then(res => {
        if(res.status === 400){
            store.dispatch({
                type: currencyConstants.SET_API_ERROR,
                payload: true
            })
        } else {
            store.dispatch({
                type: currencyConstants.SET_CURRENCIES,
                payload: res
            })
        }
    }).catch(err => {
        store.dispatch({
            type: currencyConstants.SET_API_ERROR,
            payload: true
        })
    })

}

export function setCurrenciesToConvert(index, option){
    if(index === 1){
        store.dispatch({
            type: currencyConstants.SET_CURRENCY_ONE,
            payload: option
        })
    } 

    if(index === 2) {
        store.dispatch({
            type: currencyConstants.SET_CURRENCY_TWO,
            payload: option
        })
    }
}

export function convertCurrency(from, to){
    let query = `${from}_${to}`;
    getCurrencyValue(query).then(res => {
        if(res.status === 400){
            store.dispatch({
                type: currencyConstants.SET_API_ERROR,
                payload: true
            })
        } else {
            store.dispatch({
                type: currencyConstants.SET_CURRENCY_VALUE,
                payload: res[query].val
            })
        }
    }).catch(err => {
        store.dispatch({
            type: currencyConstants.SET_API_ERROR,
            payload: true
        })
    })
}

export function setTotal(total){
    store.dispatch({
        type: currencyConstants.SET_TOTAL_TO_CONVERT,
        payload: total
    })
}

export function setCountriesList(){
    getCountriesList().then(res => {
        if(res.status === 400){
            store.dispatch({
                type: currencyConstants.SET_API_ERROR,
                payload: true
            })
        } else {
            store.dispatch({
                type: currencyConstants.SET_COUNTRIES_LIST,
                payload: res
            })
        }
    }).catch(err => {
        store.dispatch({
            type: currencyConstants.SET_API_ERROR,
            payload: true
        })
    })
}