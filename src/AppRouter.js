/**
 * Created by nowwe on 13/12/2016.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import NoMatch from './components/NoMatch'

class AppRouter extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="productInfo/:id" component={ProductDetail}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter