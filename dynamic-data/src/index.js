import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';
const rootElem = (document.getElementById('root'));

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
      <Provider store={store}> 
          <App />
      </Provider>
  );
} else {
  console.error('Failed to find the root element.');
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

