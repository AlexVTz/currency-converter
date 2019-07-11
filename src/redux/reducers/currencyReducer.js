import { currencyConstants } from '../constants';

export const initialState = {
  apiError: false,
  currencies: {},
  currencyValue: 0,
  total: 1,
  currency1: "",
  currency2: "",
  currenciesInfo: {}
};

export function todos(state = initialState, action) {
    switch (action.type) {
      case currencyConstants.SET_CURRENCIES:
        return state = {...state, currencies: action.payload}
      case currencyConstants.SET_API_ERROR:
        return state = {...state, apiError: action.payload}
    case currencyConstants.SET_CURRENCY_ONE:
        return state = {...state, currency1: action.payload}
    case currencyConstants.SET_CURRENCY_TWO:
        return state = {...state, currency2: action.payload}
    case currencyConstants.SET_CURRENCY_VALUE:
        return state = {...state, currencyValue: action.payload}
    case currencyConstants.SET_TOTAL_TO_CONVERT:
        return state = {...state, total: action.payload}
    case currencyConstants.SET_COUNTRIES_LIST:
        return state = {...state, currenciesInfo: action.payload}
      default:
        return state;
    }
  }