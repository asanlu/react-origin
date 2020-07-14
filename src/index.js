import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Route from './router'

const render = Compnent =>
  ReactDOM.render(
    <React.StrictMode>
      <Compnent />
    </React.StrictMode>,
    document.getElementById('root')
  );
render(Route);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
