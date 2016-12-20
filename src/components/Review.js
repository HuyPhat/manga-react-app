/**
 * Created by nowwe on 20/12/2016.
 */
import React, {Component} from 'react'
import {Row,Col,Glyphicon,Image} from 'react-bootstrap'
import FlexWidget from './shared/FlexWidget'
import Divider from './Divider'
import data from '../data/reviews.json'
import moment from 'moment'
import '../styles/Review.scss'

export default class Review extends Component {
    constructor() {
        super()
        this.state = {
            reviews: data.reviews
        }
    }

    render() {
        const {reviews} = this.state
        return (
            <FlexWidget title="REVIEWS" backgroundColor={false}>
                <Row>
                    <Col xs={4} className="bold-text">
                        <div>{reviews.meta.averageScore}</div>
                        <div>{reviews.meta.reviewsCount} reviews</div>
                    </Col>
                    <Col xs={8}/>
                </Row>
                {
                    reviews.comments.map((comment, index) => {
                        let rating = []
                        for (let index = 0; index < comment.ratings; index++) {
                            rating.push(<Glyphicon key={index} glyph="star" className="fill-yellow-star"/>)
                        }
                        for(let index = rating.length; index < 5; index++) {
                            rating.push(<Glyphicon key={index} glyph="star"/>)
                        }
                        let formattedCreatedTime = moment.unix(comment.createdTime).format("MMMM DD YYYY")
                        return (
                            <Row key={comment.id}>
                                <Col xs={4}><Image src={comment.url} responsive/></Col>
                                <Col xs={8}>
                                    <Col xs={12}>{comment.name}</Col>
                                    <Col xs={8}>{rating}</Col>
                                    <Col xs={4}>{formattedCreatedTime}</Col>
                                    <Col xs={12}>{comment.content}</Col>
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
