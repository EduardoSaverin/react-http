import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Appended in all requests automatically.
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

axios.defaults.headers.post['Content-Type'] = 'application/json';

// Interceptors are applied to handle things in entire app,
// this remove the need to apply these thing in each component.
// Always remember that error here is only while sending request,
// like no connection.
axios.interceptors.request.use(request => {
    console.log('Sending request',request);
    return request;
},error => {
    console.log('We got error while sending request.');
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('Got response :',response);
    return response;
},error => {
    console.log('Got error in response',error);
    return Promise.reject(error);
});

// Removing Interceptor....Store reference and just eject.
/**
 * var myInterceptor = axios.interceptors.request.use(function () {});
 * axios.interceptors.request.eject(myInterceptor);
 */


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
