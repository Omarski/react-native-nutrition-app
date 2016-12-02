
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store';
import {BrowserRouter} from 'react-router';

import LayoutView from './src/components/layoutView';

class Client extends Component {
  render() {
    return (

            <Provider store={store}>
              <LayoutView />
            </Provider>

    );
  }
}

AppRegistry.registerComponent('SmoothieCure', () => Client);
