/**
 * Created by phathuy on 12/14/16.
 */
import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import MangeSlide from './MangaSlide'
import '../styles/HotManga.scss'
import data from '../data/hot-manga.json'

class HotManga extends Component {
    constructor() {
        super()
        this.state = {
            hotManga: data.hotManga
        }
    }
    render() {
        const {hotManga} = this.state
        return (
            <Col xs={12} id="hot-manga" className="widget">
                <Col xs={12} className="hot-manga-header">
                    <Col md={10} className="hot-manga-left-title">HOT MANGA UPDATES</Col>
                    <Col md={2} className="hot-manga-right-title">VIEW ALL</Col>
                </Col>
                <Col xs={12} className="hot-manga-content">
                    <ul className="ulListMangaHot">
                        {
                            hotManga.map((item, index) => {
                                return (
                                    <li key={index}><MangeSlide data={item}/></li>
                                )
                            })
                        }
                    </ul>
                </Col>


            </Col>
        )
    }
}

export default HotManga