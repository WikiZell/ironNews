import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router} from "react-router-dom"
import Noty from "noty"
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/bootstrap-v4.css"; 
import history from "./history";


ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* Notification */
window.myMessage = function notification(message,type){
    let typeNotification = type || "warning"

    if(type === "error"){ typeNotification = "error"}

    new Noty({
        type: typeNotification,
        layout: 'topRight',
        theme: 'bootstrap-v4',
        text: message,
        timeout: '4000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
     }).show();

}
