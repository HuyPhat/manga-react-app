import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css'
// require('bootstrap-loader')

ReactDOM.render(
    <AppRouter/>,
    document.getElementById('root')
);