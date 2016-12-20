/**
 * Created by phathuy on 12/19/16.
 */
import React, {Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import FlexWidget from './shared/FlexWidget'
import Divider from './Divider'
import data from '../data/other-facts.json'
import moment from 'moment'
import '../styles/OtherFacts.scss'

export default class OtherFacts extends Component {
    constructor() {
        super()
    }

    render() {
        const {otherFacts} = this.props
        const formattedLastUpdated = moment.unix(otherFacts.lastUpdated).format("MMMM DD, YYYY")
        const formattedFirstPublished = moment.unix(otherFacts.firstPublished).format("MMMM DD, YYYY")
        let languageInstances = []
        otherFacts.languages.map((item, index) => {
            if (index === (otherFacts.languages.length - 1)) {
                languageInstances.push(`${item}`)
            }
            else {
                languageInstances.push(`${item}, `)
            }
            return languageInstances
        })
        return (
            <FlexWidget title="OTHER FACTS" backgroundColor={false}>
                <Row>
                    <Col xs={6} className="bold-text">Last Updated</Col>
                    <Col xs={6}>{formattedLastUpdated}</Col>
                </Row>
                <Row>
                    <Col xs={6} className="bold-text">First Published</Col>
                    <Col xs={6}>{formattedFirstPublished}</Col>
                </Row>
                <Row>
                    <Col xs={6} className="bold-text">Languages</Col>
                    <Col xs={6}>{languageInstances}</Col>
                </Row>
                <Row><Col xs={12}><Divider/></Col></Row>
            </FlexWidget>
        )
    }
}