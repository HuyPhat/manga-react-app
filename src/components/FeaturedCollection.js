/**
 * Created by phathuy on 12/13/16.
 */
import React from 'react'
import {Carousel, Image} from 'react-bootstrap'
import data from '../data/feature-collection.json'

class FeaturedCollection extends React.Component {

    state = {
        index: 0,
        direction: null,
        features: data.features
    }

    handleSelect = (selectedIndex, e) => {
        console.log('selected=' + selectedIndex + ', direction=' + e.direction)
        this.setState({
            index: selectedIndex,
            direction: e.direction
        })
    }

    render() {
        const {features} = this.state
        return (
            <Carousel className="feature-carousel" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                {
                    features.map((item,index) =>
                        <Carousel.Item key={item.id}>
                            <Image src={item.url} responsive/>
                            {/*<Carousel.Caption>*/}
                                {/*<h3>First slide label</h3>*/}
                                {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                            {/*</Carousel.Caption>*/}
                        </Carousel.Item>
                    )
                }
            </Carousel>
        )
    }
}

export default FeaturedCollection