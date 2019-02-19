import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Gdun from '../Img/jdun_big.jpg';
import Grumpy from '../Img/gr_cat_big.jpg';
import VerticalPost from "./VerticalPost";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        rows: 0
        }
    };

// основной метод
render () {
    let pages=[]; //отвечает за количество столбцов
    let colMd=0; //отвечает за разметку bootstrap-3
    let Ava_1=""; //отвечает за размер аватара Ждуна
    let Ava_2=""; //отвечает за размер аватара Кота
    if (this.props.Stage === 1) {
        for (let i = 0; i < 6; i++) {
            pages[i] = {};
        }
        colMd=3;
        Ava_1="ava1";
        Ava_2="ava2";
    }
    if (this.props.Stage === 2) {
        for (let i = 0; i < 8; i++) {
            pages[i] = {};
        }
        colMd=2;
        Ava_1="ava1_medium";
        Ava_2="ava2_medium";
    }
    if (this.props.Stage === 3) {
        for (let i = 0; i < 10; i++) {
            pages[i] = {};
        }
        colMd=1;
        Ava_1="ava1_small";
        Ava_2="ava2_small";
    }
     return (<Grid>
                <Row>
                    <Col md={colMd}>
                        <div><center><h3 className={this.props.setPlayer_1_Color(this.props.counter)}>Ждун</h3></center></div>
                        <div><center><Image className={Ava_1} src={Gdun} circle/></center></div>
                    </Col>
                    {pages.map((obj, i) => {
                        return (<div key={i} onClick={() => this.props.IncrementStolbik(i, this.props.stolbik[i])}>
                            <VerticalPost page={this.props.page[i]} class={3}/>
                        </div>)
                    })}

                    <Col md={colMd}>
                        <div><center><h1 className={this.props.setPlayer_2_Color(this.props.counter)}>Кот</h1></center></div>
                        <div><center><Image className={Ava_2} src={Grumpy} circle/></center></div>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

