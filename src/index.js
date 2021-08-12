import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
React.icons = icons

// 2
const httpLink = createHttpLink({
  uri: 'http://ec2-13-232-217-64.ap-south-1.compute.amazonaws.com/admin/graphql'
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
ReactDOM.render(

  <Provider store ={store}>


  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
