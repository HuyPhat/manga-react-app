/**
 * Created by phathuy on 12/14/16.
 */
import React, {Component} from 'react'
import {Grid, Row, Col, Glyphicon} from 'react-bootstrap'
import classNames from 'classnames'
import '../styles/MangaGenre.scss'
import data from '../data/genre.json'

class MangaGenre extends Component {
    constructor() {
        super()
        this.state = {
            genres: data.genres
        }
    }

    render() {
        const {genres} = this.state
        return (
            <Col xs={12} id="manga-genre" className="widget">
                <Col xs={12} className="genre-header">BROWSE MANGA BY GENRES</Col>
                {genres.map((item, i) => {
                    return (
                        <Col xs={6} className="genre-item-col" key={item.id}>
                            {item.title}
                        </Col>
                    )
                })}
                <Col xs={12} className="genre-footer text-center">SHOW MORE <Glyphicon glyph="triangle-bottom"/></Col>
            </Col>
        )
    }
}

export default MangaGenre