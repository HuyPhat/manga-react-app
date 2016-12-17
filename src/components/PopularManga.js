/**
 * Created by phathuy on 12/18/16.
 */
import React from 'react'
import {Table} from 'react-bootstrap'
import data from '../data/popular-manga.json'
import '../styles/PopularManga.scss'

class PopularManga extends React.Component {
    constructor() {
        super()
        this.state = {
            popularManga: data.popularManga
        }
    }

    render() {
        const {popularManga} = this.state
        return (
            <div className="right-widgets popular-widget">
                <div className="popular-header">
                    <div className="title left-title">MOST POPULAR MANGA</div>
                    <div className="title right-title">VIEW ALL</div>
                </div>
                <div className="popular-body">
                    <Table className="popular-table" responsive>
                        <tbody>
                        {
                            popularManga.map((item, index) =>
                                <tr key={item.id}>
                                    <td className="side">{index + 1}</td>
                                    <td><img width={80} height={'auto'} className="" src={item.url}/></td>
                                    <td className="side">
                                        <div>{item.title}</div>
                                        <div>{item.author}</div>
                                        <div>{item.amountChapter} {item.amountChapter > 1 ? 'chapters' : 'chapter'}</div>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default PopularManga