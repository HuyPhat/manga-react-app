/**
 * Created by nowwe on 13/12/2016.
 */
import React  from 'react'
import {Grid,Row,Col,Image} from 'react-bootstrap'
import Chapter from './Chapter'
import MangaInfo from './MangaInfo'
import OtherFacts from './OtherFacts'
import SimilarManga from './SimilarManga'
import RelatedCollection from './RelatedCollection'
import response from '../data/product-detail.json'

const ProductDetail = (props) => {
    const bannerImageStyle = {"paddingLeft":0,"paddingRight":0}
    const paramId = props.params.id
    console.log(paramId)
    const data = response.data.mangaList.find((manga) => {
        return manga.id === parseInt(paramId,10)
    })
    console.log(data)
    return (
        <div>
            <Grid fluid style={bannerImageStyle}>
                <Image src={data.info.banner_url} responsive/>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <MangaInfo info={data.info}/>
                        <Chapter chapters={data.chapters}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <OtherFacts otherFacts={data.facts}/>
                        <SimilarManga data={data.similarManga}/>
                        <RelatedCollection data={data.relatedCollection}/>
                    </Col>
                </Row>
            </Grid>
        </div>

    )
}

export default ProductDetail