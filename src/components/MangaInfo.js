/**
 * Created by nowwe on 19/12/2016.
 */
import React from 'react'
import {Image, Glyphicon, Button, Row, Col} from 'react-bootstrap'
import '../styles/MangaInfo.scss'
import data from '../data/manga-info.json'

class MangaInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            info: data.info
        }
    }

    render() {
        const {info} = this.state
        console.log(info)
        let rating = []
        for (let index = 0; index < info.mega.rank; index++) {
            rating.push(<Glyphicon key={index} glyph="star" className="fill-yellow-star"/>)
        }
        for(let index = rating.length; index < 5; index++) {
            rating.push(<Glyphicon key={index} glyph="star"/>)
        }
        return (
            <div className="manga-info-container widget-1">
                <Row>
                    <Col xs={4}>
                        <Image src={info.url} responsive />
                    </Col>
                    <Col xs={8}>
                        <div className="upper-part-container">
                            <div className="info-title">{info.title}</div>
                            <div className="mega-info">{info.mega.author} | {info.mega.chapters} chapters | {info.mega.status} | Rank {info.mega.rank}</div>
                            <div className="info-rating">{rating} ({info.mega.reviews} reviews)</div>
                            <div className="btn-container"><Button className="btn-outline-primary">READ</Button></div>
                        </div>
                    </Col>
                </Row>
                <Row className="category-btn-container">
                    <Col xs={12}>
                        {
                            info.categories.map((item, index) =>
                                <Button key={index} className="btn-category">{item.title}</Button>
                            )
                        }
                    </Col>
                </Row>
                <Row className="description-container">
                    <Col xs={12}>{info.description}</Col>
                </Row>
                <Row className="more-info-container">
                    <Col xs={12}>MORE INFO <Glyphicon glyph="triangle-bottom"/></Col>
                </Row>
            </div>
        )
    }
}

export default MangaInfo