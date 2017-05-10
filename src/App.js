import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import TodoList from './components/TodoList';
import reducer from './reducers/reducers';
let store;
//让redux开发者工具能够辨认
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
  store = createStore(
    reducer
  );
}else{
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default () => (
  <Provider store={store}>
    <TodoList/>
  </Provider>
);
