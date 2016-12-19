/**
 * Created by nowwe on 13/12/2016.
 */
import React  from 'react'
import {Grid,Row,Col,Image} from 'react-bootstrap'
import Chapter from './Chapter'

const ProductDetail = () => {
    const bannerImageStyle = {"paddingLeft":0,"paddingRight":0}
    return (
        <div>
            <Grid fluid style={bannerImageStyle}>
                <Image src="/images/productInfo/product-info.jpg" responsive/>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <Chapter/>
                    </Col>
                    <Col xs={12} md={4}>4</Col>
                </Row>
            </Grid>
        </div>

    )
}

export default ProductDetail