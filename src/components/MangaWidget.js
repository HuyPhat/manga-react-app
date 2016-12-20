/**
 * Created by phathuy on 12/17/16.
 */
import React from 'react'
import {Col, Glyphicon} from 'react-bootstrap'
import '../styles/MangaWidget.scss'

class MangaWidget extends React.Component {

    render() {
        const {title, showMore} = this.props
        return (
            <Col>
                <Col xs={12} className="widget widget-1 widget-2 widget-hot-manga widget-latest-manga">
                    <Col xs={12} className="hot-manga-header">
                        <Col xs={10} className="hot-manga-left-title">{title}</Col>
                        <Col xs={2} className="hot-manga-right-title">VIEW ALL</Col>
                    </Col>
                    <Col xs={12} className="hot-manga-content">
                        {this.props.children}
                    </Col>
                    {showMore ? <Col xs={12} className="genre-footer widget-footer text-center">SHOW MORE <Glyphicon glyph="triangle-bottom"/></Col> : null}
                </Col>
            </Col>
        )
    }
}

MangaWidget.propTypes = {
    title: React.PropTypes.string.isRequired,
    showMore: React.PropTypes.bool,
    children: React.PropTypes.node
}

MangaWidget.defaultProps = {
    title: '',
    showMore: false
}

export default MangaWidget
