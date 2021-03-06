/**
 * Created by phathuy on 12/18/16.
 */
import React from 'react'
import {Table} from 'react-bootstrap'
import FlexWidget from './shared/FlexWidget'

class Chapter extends React.Component {
    render() {
        const {chapters} = this.props
        return (
            <FlexWidget title={"CHAPTERS"} showMore={true}>
                <Table className="product-info-table" striped condensed hover responsive>
                    <tbody>
                    <tr>
                        <td>Jump to chapter</td>
                        <td className="chapter-number">700</td>
                        <td className="chapter-number">600</td>
                        <td className="chapter-number">500</td>
                        <td className="chapter-number">400</td>
                        <td className="chapter-number">300</td>
                        <td className="chapter-number">200</td>
                        <td className="chapter-number">100</td>
                        <td className="chapter-number">1</td>
                        <td/>
                    </tr>
                    {chapters.map((item,index) =>
                        <tr key={item.id}>
                            <td>
                                {/*<div><i className="fa fa-circle"/> {item.title}</div>*/}
                                <div>{item.title}</div>
                            </td>
                            <td colSpan="8"/>
                            <td className="duration-column">{item.duration} hour ago</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </FlexWidget>
        )
    }
}

export default Chapter