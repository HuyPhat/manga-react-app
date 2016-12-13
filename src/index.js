import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
// global.jQuery = require('jquery')
require('bootstrap-loader')
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
    <AppRouter/>,
    document.getElementById('root')
);