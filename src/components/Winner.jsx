import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Gdun from '../Img/jdun_big.jpg';
import Grumpy from '../Img/gr_cat_big.jpg';
import Bunny from '../Img/bunny.png';


export default class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
// основной метод
    render () {
        let textClass="";
        let imageClass="";
        let Source="";
        let Text="";
        if (this.props.Stage===4) {
            textClass = "gdun_win";
            imageClass = "ava1_win";
            Source = Gdun;
            Text = <h1>Победитель: Ждун</h1>
        }
        if (this.props.Stage===5) {
            textClass = "cat_win";
            imageClass = "ava2_win";
            Source = Grumpy;
            Text = <h1>Победитель: Сердитый Кот</h1>
        }
        if (this.props.Stage===6) {
            textClass = "nobody_win";
            imageClass = "nobody_ava_win";
            Source = Bunny;
            Text = <h1>Игра окончена, победителей нет...</h1>
        }

        return (<Grid>
                          <Row>
                            <Col md={3}/>
                            <Col md={6}>
                                <div className={textClass}><center>{Text}</center></div>
                                <div><center><Image className={imageClass} src={Source} circle/></center></div>
                                <div><center><Button bsStyle="info"
                                onClick={()=>this.props.newGame()}
                                >Новая игра</Button></center></div>
                            </Col>
                            <Col md={3}/>
                    </Row>
                </Grid>
            );}
}
