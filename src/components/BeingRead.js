/**
 * Created by phathuy on 12/18/16.
 */
import React from 'react'
import {Table} from 'react-bootstrap'
import data from '../data/being-read.json'
import '../styles/BeingRead.scss'

class BeingRead extends React.Component {
    constructor() {
        super()
        this.state = {
            beingRead: data.beingRead
        }
    }

    render() {
        const {beingRead} = this.state
        return (
            <div className="right-widgets popular-widget">
                <div className="popular-header">
                    <div className="title">BEING READ RIGHT NOW</div>
                </div>
                <div className="popular-body">
                    <Table className="popular-table" responsive>
                        <tbody>
                        {
                            beingRead.map((item, index) =>
                                <tr key={item.id}>
                                    <td>
                                        <img width={50} height={'auto'} className="" src={item.url}/>
                                        <div className="popular-detail">
                                            <div>{item.title}</div>
                                            <div>{item.author}</div>
                                        </div>
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

export default BeingRead