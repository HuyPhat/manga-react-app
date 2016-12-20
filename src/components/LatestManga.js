/**
 * Created by phathuy on 12/17/16.
 */
import React, {Component} from 'react'
import MangaWidget from './MangaWidget'
import {Col, Table, Image, Glyphicon} from 'react-bootstrap'
import '../styles/LatestManga.scss'
import data from '../data/latest-manga.json'

class LatestManga extends Component {
    constructor() {
        super()
        this.state = {
            latestManga: data.latestManga
        }
    }
    render() {
        const {latestManga} = this.state
        console.log(latestManga)
        return (
            <MangaWidget title={"LATEST MANGA UPDATES"} showMore={true}>
                <Table className="latest-manga-table" striped condensed hover>
                    <thead>
                    <tr>
                        {latestManga.headers.map((item,index) =>
                            <th key={index}>{item}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {latestManga.sheets.map((item,index) =>
                        <tr key={index}>
                            <td>
                                <a href={`/productInfo/${item.id}`}><Image className="manga-thumbnail" src={item.img_url} responsive /></a>
                                <div className="manga-name">
                                    <div>{item.name}</div>
                                    <div>{item.amounts}</div>
                                </div>
                            </td>
                            <td>
                                <ul className="latest-new-list">
                                    {item.newChapters.map((chapter,index) =>
                                        <li key={index}><i className="fa fa-circle" aria-hidden="true"></i> {chapter}</li>
                                    )}
                                </ul>
                            </td>
                            <td className="latest-manga-duration">{item.duration}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </MangaWidget>
        )
    }
}

export default LatestManga