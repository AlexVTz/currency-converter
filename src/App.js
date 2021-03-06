import React, { Component } from "react";
import { Provider } from 'react-redux';

import Main from './Main.js';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;