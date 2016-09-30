import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  Text,
  View
} from 'react-native';


//import * as reducers from '../reducers';
//import App from '../../components/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View>
        <Text>Kalle</Text>
      </View>
      </Provider>
    );
  }
}
