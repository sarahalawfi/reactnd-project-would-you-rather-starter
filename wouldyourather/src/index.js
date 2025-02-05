import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import{ createStore }from 'redux'
import{ Provider }from 'react-redux'
import reducer from './reducers'
import middleware  from './middleware'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";

const store = createStore(reducer, middleware)

ReactDOM.render(
    // We can use the store in whole the app
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
 // unregister() to register() below. Note this comes with some pitfalls.
 // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
