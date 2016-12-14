/**
 * Created by nowwe on 13/12/2016.
 */
import React  from 'react'
import {Grid,Row,Col} from 'react-bootstrap'
// import FeaturedCollection from './FeaturedCollection'
import HotManga from './HotManga'
import MangaGenre from './MangaGenre'

const Home = () => {
    return (
        <Grid>
            <Row>FeatureCollection</Row>
            <Row>
                <Col md={8}>
                    <HotManga/>
                </Col>
                <Col md={4}>
                    <MangaGenre/>
                </Col>
            </Row>
        </Grid>
    )
}

export default Home