/**
 * Created by phathuy on 12/14/16.
 */
import React, {Component} from 'react'
// import {Col} from 'react-bootstrap'
import MangaWidget from './MangaWidget'
import MangeSlide from './MangaSlide'
import '../styles/HotManga.scss'
import data from '../data/hot-manga.json'

class HotManga extends Component {
    constructor() {
        super()
        this.state = {
            hotManga: data.hotManga1
        }
    }
    render() {
        const {hotManga} = this.state
        return (
            <MangaWidget title={"HOT MANGA UPDATES"}>
                <ul className="ulListMangaHot">
                    {
                        hotManga.map((item, index) => {
                            return (
                                <li key={index}><MangeSlide data={item} index={index+1}/></li>
                            )
                        })
                    }
                </ul>
            </MangaWidget>
        )
    }
}

export default HotManga