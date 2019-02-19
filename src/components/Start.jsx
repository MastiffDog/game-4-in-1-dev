import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Gdun from '../Img/jdun_big.jpg';
import Grumpy from '../Img/gr_cat_big.jpg';
import Content from "./Content";

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

render () {

// основной метод

        return (<Grid>

                <Row>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                        <div>
                            <div>
                                <div><h1 className="start">Игра 4 в ряд</h1></div>
                                <div><h2 className="start">Cложность:</h2></div>
                                <div><center><Button bsStyle="info" className="btn"
                                                     onClick={()=>this.props.getComplication(1)}
                                >Новички</Button></center></div>
                                <div><center><Button bsStyle="info" className="btn"
                                                     onClick={()=>this.props.getComplication(2)}
                                                     >Любители</Button></center></div>
                                <div><center><Button bsStyle="info" className="btn"
                                                     onClick={()=>this.props.getComplication(3)}
                                                     >Профи</Button></center></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>
            </Grid>
        );

    }}
