import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import './index.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './containers/App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const store =  configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
