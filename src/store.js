import { createStore } from 'redux';

import { todos, initialState } from './redux/reducers/currencyReducer';

const store = createStore(todos, initialState);
export default store;