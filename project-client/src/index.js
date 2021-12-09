import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './index.css';
import {store} from "./store/store";
import App from "./comps/App"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App style={{margin: 0}} />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

