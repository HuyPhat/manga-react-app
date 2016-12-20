/**
 * Created by nowwe on 20/12/2016.
 */
import React, {Component} from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import FlexWidget from './shared/FlexWidget'
import Divider from './Divider'
import '../styles/SimilarManga.scss'

export default class SimilarManga extends Component {

    render() {
        const {data} = this.props
        return (
            <FlexWidget title="SIMILAR MANGA" backgroundColor={false}>
                {
                    data.map((item,index) => {
                        return (
                            <Row key={item.id} className="similar-manga-container">
                                <Col xs={3}><Image src={item.url}/></Col>
                                <Col xs={9}>
                                    <div>{item.title}</div>
                                    <div>{item.author}</div>
                                    <div>{item.chapterCount} chapters</div>
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