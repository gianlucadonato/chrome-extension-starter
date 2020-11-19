import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/popup';
import './app.scss';

import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

const proxyStore = new Store();

proxyStore.ready().then(() => {
  ReactDOM.render(
    <Provider store={proxyStore}>
      <Popup />
    </Provider>,
    document.getElementById('popup'),
  );
});
