import React, {Component} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/App.scss'

class App extends Component {
    render() {
        return (
            <div>
                <header role="banner" className="site-header bs-docs-nav">
                    <div><NavBar/></div>
                </header>
                <main className="site-content">
                    {this.props.children}
                </main>
                <footer className="site-footer">
                    <Footer/>
                </footer>
            </div>
        )
    }
}

export default App
