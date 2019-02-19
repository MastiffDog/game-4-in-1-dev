//функция определения победителя. Возвращает 1 или 2 в зависимости от того, совпали ли 4 клеточки
//игрового поля по ходам кота или ждуна. И соответственно, 0 если не совпали. Сравниваются горизонтальные
//, вертикальные и диагональные линии

export default function getWinner(x, y, array) {
//x,y - значения длины и высоты игрового поля соответственно
    const block = 4; //размер квадрата
    for (let gLine = 0; gLine < x - block + 1; gLine++) {
        for (let vLine = 0; vLine < y - block + 1; vLine++) {
            if (checkDiagonal(gLine, vLine, array) === 1 ||(checkLines(gLine, vLine, array) === 1)) {
                return 1;
            }
            if (checkDiagonal(gLine, vLine, array) === 2 ||(checkLines(gLine, vLine, array) === 2)) {
                return 2;
            }
        }}
    return 0;
}
//функция проверки диагоналей на наличие совпадений единичичек/двоек (ходов кота и ждуна соответственно)
function checkDiagonal (offsetX, offsetY, array) {
    let Diagonal_1=[];
    let Diagonal_2=[];
    for (let i=0;i<4;i++) {
        Diagonal_1[i] = array[i+offsetX][i+offsetY];
        Diagonal_2[i] = array[i+offsetX][offsetY+3-i];
    }
    const Result_1 = getArrow(Diagonal_1);
    const Result_2 = getArrow(Diagonal_2);
    if (Result_1===1 || Result_2===1) {return 1}
    if (Result_1===2 || Result_2===2) {return 2}
    else {return 0}
}

//функция проверки строк и столбцов квадрата на наличие совпадений единичек/двоек (ходов кота и ждуна соответственно)
function checkLines(offsetX, offsetY, array) {
    const RowArrow=[];
    const ColArrow=[];
    for(let j=0; j<4; j++) {
        for (let i = 0; i < 4; i++) {
            RowArrow[i] = array[offsetX+j][offsetY+i];
            ColArrow[i] = array[offsetX+i][offsetY+j];
        }
        const RowResult=getArrow(RowArrow);
        const ColResult=getArrow(ColArrow);
        if(RowResult===1 || ColResult===1) {return 1;}
        if(RowResult===2 || ColResult===2) {return 2;}
    }
    return 0;
}

//функция, которая позволяет из линейного массива любой длины понять, наполнен он единичками либо двойками.
//если есть хоть одно отличающееся число, возвращается 0
function getArrow(arr) {
    const result = arr.reduce(function (prevValue, nextValue) {
        if (prevValue === 1 && nextValue === 1) {
            return 1
        }
        if (prevValue === 2 && nextValue === 2) {
            return 2
        } else {
            return 0
        }
    });
    return result;
}
