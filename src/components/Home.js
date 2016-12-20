/**
 * Created by nowwe on 13/12/2016.
 */
import React  from 'react'
import {Grid,Row,Col} from 'react-bootstrap'
import FeaturedCollection from './FeaturedCollection'
import HotManga from './HotManga'
import MangaGenre from './MangaGenre'
import LatestManga from './LatestManga'
import PopularManga from './PopularManga'
import BeingRead from './BeingRead'

const Home = () => {
    return (
        <Grid>
            <FeaturedCollection/>
            <Row>
                <Col md={8}>
                    <HotManga/>
                    <LatestManga/>
                </Col>
                <Col md={4}>
                    <MangaGenre/>
                    <PopularManga/>
                    <BeingRead/>
                </Col>
            </Row>
        </Grid>
    )
}

export default Home