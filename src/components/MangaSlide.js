/**
 * Created by nowwe on 14/12/2016.
 */
import React from 'react'
import {Image} from 'react-bootstrap'

const MangaSlide = ({data}) => {
    return (
        <div className="divimgslide">
            <a className="aimg_slide" href="/truyen/2016/09/one-piece/112.html" title="One Piece">
                <Image alt="One Piece" src={data.img_url} responsive />
            </a>
            <a className="atext" href="/truyen/2016/09/one-piece/112.html" title="One Piece">{data.title}</a>
            <a className="atext" href="/truyen/2016/09/one-piece/112.html" title="One Piece">{data.title}</a>
            <a className="atext" href="/truyen/2016/09/one-piece/112.html" title="One Piece"><i className="fa fa-circle" aria-hidden="true"></i> Chapter</a>
        </div>
    )
}

export default MangaSlide