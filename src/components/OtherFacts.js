/**
 * Created by phathuy on 12/19/16.
 */
import React, {Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import FlexWidget from './shared/FlexWidget'
import data from '../data/other-facts.json'
import moment from 'moment'

export default class OtherFacts extends Component {
    constructor() {
        super()
        this.state = {
            otherFacts: data.data
        }
    }

    render() {
        const {otherFacts} = this.state
        var day = moment.unix(otherFacts.lastUpdated)
        var last = moment(day)
        return (
            <FlexWidget title="OTHER FACTS">
                <Row>
                    <Col xs={6} className="bold-text">Last Updated</Col>
                    <Col xs={6}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className="bold-text">First Published</Col>
                    <Col xs={6}></Col>
                </Row>
                <Row>
                    <Col xs={6} className="bold-text">Languages</Col>
                    <Col xs={6}></Col>
                </Row>
            </FlexWidget>
        )
    }
}