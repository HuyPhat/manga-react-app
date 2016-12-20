/**
 * Created by nowwe on 20/12/2016.
 */
import React, {Component} from 'react'
import {Row,Col,Image,Glyphicon} from 'react-bootstrap'
import FlexWidget from './shared/FlexWidget'
import Divider from './Divider'
import data from '../data/related-collection.json'
import '../styles/RelatedCollection.scss'

export default class RelatedCollection extends Component {
    constructor() {
        super()
        this.state = {
            data: data.relatedCollection
        }
    }

    render() {
        const {data} = this.state
        return (
            <FlexWidget title="RELATED COLLECTIONS" backgroundColor={false}>
                {
                    data.map((item,index) => {
                        return (
                            <Row key={item.id} className="related-colletion-container">
                                <Col xs={6}><Image src={item.url}/></Col>
                                <Col xs={6}>
                                    <div>{item.title}</div>
                                    <div><Glyphicon glyph="book"/> {item.mangaCount} manga</div>
                                </Col>
                            </Row>
                        )
                    })
                }
                <Row><Col xs={12}><Divider/></Col></Row>
            </FlexWidget>
        )
    }
}