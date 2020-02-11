import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Root from './Components/Root/Root';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
