import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers/AppReducer';
import AppWithNavigationState, { middleware } from './src/components/AppNavigator';

export default class ReduxExampleApp extends Component {
  store = createStore(
    AppReducer,
    applyMiddleware(middleware),
  );

  render() {
     return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
     );
  }
}

