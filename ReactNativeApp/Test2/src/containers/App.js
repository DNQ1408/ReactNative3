import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

import { Provider} from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
import DoTaskScreen from './DoTaskScreen';

const store = createStore(rootReducer)

class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store} >
        <DoTaskScreen/>
      </Provider>
    );
  }
}


export default App;