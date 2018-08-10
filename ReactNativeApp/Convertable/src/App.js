import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers/";
import ScreenWrapper from "./containers/ScreenWrapper";

const appReducer = combineReducers(reducers);
const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScreenWrapper />
      </Provider>
    );
  }
}
