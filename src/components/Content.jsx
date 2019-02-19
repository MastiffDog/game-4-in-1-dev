import React from 'react';
import getWinner from "./getWinner";
import Main from './Main';
import Start from './Start';
import Winner from './Winner';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            stolbik: [],
            page: [],
            Stage: 0,
            x: 0,
            y: 0
        };
        this.IncrementStolbik = this.IncrementStolbik.bind(this);
        this.setPlayer_1_Color = this.setPlayer_1_Color.bind(this);
        this.setPlayer_2_Color = this.setPlayer_2_Color.bind(this);
        this.getComplication = this.getComplication.bind(this);
        this.newGame = this.newGame.bind(this);
    }

//главная функция, в ней устанавливаются массивы значений для отрисовки фишек, а также создаются массивы стейтов для
//последующей сортировки для работы алгоритма проверки победы и конца игры, вызываются функции проверки победы
//и заполнения игрового поля
    IncrementStolbik(id, value) {
        let currentState = value;
        currentState++;

//проверяем, заполнено ли игровое поле: пробегаем по последним ячейкам массива pages, которые будут
//заполнены 1 или 2 если игра закончена, либо undefined, если игра еще ведется
        let ArrayIsOver=[];
        for (let i=0;i<this.state.x;i++){
            ArrayIsOver[i]=this.state.page[i][5];
        }
        const EndGame = ArrayIsOver.reduce(function (prevValue, nextValue) {
           return prevValue+nextValue;
        });
        if(!isNaN(EndGame)) {
            this.setState({Stage:6});
        }

//здесь устанавливаются стейты для соответствующего столбца, причем, если он заполнен, клик не засчитывается

        if (value > 6) {
            return;
        } else {
            if (this.state.counter === 0) {
                this.setState({counter: 1});
                this.state.page[id][this.state.stolbik[id]] = 1;
            }
            if (this.state.counter === 1) {
                this.setState({counter: 0});
                this.state.page[id][this.state.stolbik[id]] = 2;
            }
            this.state.stolbik[id] = currentState;
        }
//вызываем функцию getWinner, которая смотрит, есть ли совпадения каких либо фишек по 4 в ряд, и если есть,
//то в зависимости от результата устанавливаем Stage победителя
       const Result = getWinner(this.state.x,this.state.y, this.state.page);
       if (Result===1) {
           this.setState({Stage:5});
       }
       if (Result===2) {
           this.setState({Stage:4});
       }
       }
//функция смены цвета игрока №1 (меняет цвет при помощи стилей)
setPlayer_1_Color (counter) {
        if (counter) {
            return "player_1_green";
        }
        else {
            return "player_1_red";
        }
    }
//функция смены цвета игрока №2 (меняет цвет при помощи стилей)
setPlayer_2_Color (counter) {
        if (counter) {
            return "player_2_red";
        }
        else {
            return "player_2_green";
        }
    }
//функция, которая определяет сложность игры в зависимости от id: 1 - новички, 2 - любители, 3 - профи
//и устанавливает размер поля pages в зависимости от сделанного выбора. Для новичков количество
//колонок 6, любителей - 8, профи - 10. Количество выбрано исходя из возможнойстей react-bootstrap3
//(максимум 12 колонок в одной разметке). Также устанавливается state stolbik, который отвечает за
//отрисовку картинок в столбце (белый квадрат, ждун или кот).
getComplication (value) {
    if (value === 1) {
        this.setState({Stage: 1},);
        this.setState({page:[[],[],[],[],[],[]]});
        this.setState({stolbik:[0,0,0,0,0,0]});
        this.setState({x:6});
        this.setState({y:7});
    }
    if (value === 2) {
        this.setState({Stage: 2});
        this.setState({page:[[],[],[],[],[],[],[],[]]});
        this.setState({stolbik:[0,0,0,0,0,0,0,0]});
        this.setState({x:8});
        this.setState({y:7});
    }
    if (value === 3) {
        this.setState({Stage: 3})
        this.setState({page:[[],[],[],[],[],[],[],[],[],[]]})
        this.setState({stolbik:[0,0,0,0,0,0,0,0,0,0]});
        this.setState({x:10});
        this.setState({y:7});
      }
}
//функция, которая отвечает за возврат к началу игры, если после определения победителя игроки
//захотят сыграть еще раз. Суть: приводит Stage к начальному состоянию
newGame () {
     this.setState({Stage:0});
}

    render () {
             if(!this.state.Stage)
                {return <Start
                getComplication = {this.getComplication}
                />;}
             if(this.state.Stage===1 || this.state.Stage ===2 || this.state.Stage===3)
                {return (<Main
                           IncrementStolbik={this.IncrementStolbik}
                           setPlayer_1_Color={this.setPlayer_1_Color}
                           setPlayer_2_Color={this.setPlayer_2_Color}
                           counter = {this.state.counter}
                           stolbik = {this.state.stolbik}
                           page = {this.state.page}
                           Stage={this.state.Stage}
                />);}
             if(this.state.Stage===4 || this.state.Stage===5|| this.state.Stage===6) {
                 return (<Winner
                            Stage={this.state.Stage}
                            newGame={this.newGame}
                          />)
             }

    }}

