/**
 * Created by nowwe on 19/12/2016.
 */
import React from 'react'
import {Image, Glyphicon, Button} from 'react-bootstrap'
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
        const {info} = this.state.info
        console.log(info)
        return (
            <div>
                <div className="upper-info-container">
                    <div><Image src={info.url} responsive /></div>
                    <div>
                        <div>{info.title}</div>
                        <div>{info.author} | {info.chaptes} chapters | {info.status} | Rank {info.rank}</div>
                        <div>
                        {
                            info.rank.map((item, index) =>
                                <Glyphicon key={index} glyph="star"/>
                            )
                        }
                        </div>
                        <div><Button>READ</Button></div>
                    </div>
                </div>
                <div className="lower-info-container">
                    <div>
                        {
                            info.categories.map((item, index) =>
                                <Button key={index}>{item.title}</Button>
                            )
                        }
                    </div>
                    <div>{info.description}</div>
                </div>
            </div>
        )
    }
}

export default MangaInfo