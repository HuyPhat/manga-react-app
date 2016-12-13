/**
 * Created by nowwe on 13/12/2016.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="productInfo" component={ProductDetail}/>
                </Route>
            </Router>
        )
    }
}