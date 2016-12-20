/**
 * Created by phathuy on 12/19/16.
 */
import React from 'react'
import {Row,Col,Glyphicon} from 'react-bootstrap'
import '../../styles/FlexWidget.scss'

class FlexWidget extends React.Component {
    render() {
        const {title, showMore, viewAll, backgroundColor} = this.props
        return (
            <div className="flex-widget">
                <Col xs={12} className={backgroundColor ? "flex-container widget-1" : "flex-container no-background"}>
                    <Row>
                        <Col md={10} className="left-title">{title}</Col>
                        {viewAll ? <Col md={2} className="right-title">VIEW ALL</Col> : null}
                    </Row>
                    <Row>
                        <Col xs={12} className="content">
                            {this.props.children}
                        </Col>
                    </Row>
                    <Row>{showMore ? <Col xs={12} className="genre-footer widget-footer text-center">SHOW MORE <Glyphicon glyph="triangle-bottom"/></Col> : null}</Row>
                </Col>
            </div>
        )
    }
}

FlexWidget.propTypes = {
    title: React.PropTypes.string.isRequired,
    showMore: React.PropTypes.bool,
    viewAll: React.PropTypes.bool,
    children: React.PropTypes.node,
    backgroundColor: React.PropTypes.bool
}

FlexWidget.defaultProps = {
    title: '',
    showMore: false,
    viewAll: false,
    backgroundColor: true
}

export default FlexWidget