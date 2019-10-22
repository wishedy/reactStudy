import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './reactReduxTodolist/Todolist';
import {Provider} from 'react-redux';
import store from './reactReduxStore/index';
const App = (
  <Provider store={store}>
      <Todolist />
  </Provider>
);
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
