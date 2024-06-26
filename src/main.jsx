import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
//importing redux to app
import store from "./redux/store.js"

//importing components
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
