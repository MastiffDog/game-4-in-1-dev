import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import jdun_small from "../Img/jdun.png";
import cat_small from "../Img/grumpy_cat.png";
import base_block from "../Img/base_block.png";

function PictureRoute(value) {
    if (!value) {
        return base_block;
    }
    if (value===1) {
        return cat_small;
    }
    if (value===2) {
        return jdun_small;
    }
}

export default function VerticalPost (props) {
    const page=(props.page)
   // console.log(page);
    const block_number = [];
    for (let i=0; i<7;i++) {
        block_number[i]={};
    }
    return <Col md={1}>
            <div className="vert">
                 {block_number.map((obj, i) => {
                        return  (<div key={i}><Image className="chip_ava" src={PictureRoute(page[7-i-1])} rounded/></div>)})}
            </div>
        </Col>
}
