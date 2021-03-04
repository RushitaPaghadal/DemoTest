/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reducers from './DemoSrc/Reducers/Reducers';
import Navigation from './DemoSrc/Navigation';
import LoginScreen from './DemoSrc/Screens/LoginScreen';

const store = createStore(Reducers, applyMiddleware(thunk, logger))

const App: () => React$Node = () => {
  return (
  <Provider store={store}>
    <Navigation />
  </Provider>
  )};



export default App;
