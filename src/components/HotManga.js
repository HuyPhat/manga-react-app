/**
 * Created by phathuy on 12/14/16.
 */
import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import '../styles/HotManga.scss'

class HotManga extends Component {
    render() {
        return (
            <div id="hot-manga" className="widget">
                <Row>
                    <Col md={10}>HOT MANGA UPDATES</Col>
                    <Col md={2}>VIEW ALL</Col>
                </Row>
            </div>
        )
    }
}

export default HotManga