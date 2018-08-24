import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/index.js';
import { Provider } from 'react-redux';
import { store } from './helpers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
<Provider store={store}>
  <App />
</Provider> ,

document.getElementById('root'));
registerServiceWorker();
