/**
 * Created by nowwe on 14/12/2016.
 */
import React from 'react'
import {Image} from 'react-bootstrap'

const MangaSlide = (props) => {
    const classNames = props.index % 5 === 0 ? 'divimgslide last-slide' : 'divimgslide'
    return (
        <div className={classNames}>
            <a className="aimg_slide" href={`/productInfo/${props.data.id}`} title="One Piece">
                <Image alt="One Piece" src={props.data.img_url} responsive />
            </a>
            <a className="atext" href={`/productInfo/${props.data.id}`} title="One Piece">{props.data.title}</a>
            <a className="atext" href={`/productInfo/${props.data.id}`} title="One Piece">{props.data.title}</a>
            <a className="atext" href={`/productInfo/${props.data.id}`} title="One Piece"><i className="fa fa-circle" aria-hidden="true"></i> Chapter</a>
        </div>
    )
}

export default MangaSlide