function magicMatr(matrix) {
    let matrix1 = matrix.map(row => row.split(" ").map(Number));
    let sumRow = 0;
    let sumCol = 0;
    let equalRows = 1;
    let equalCols = 1;

    let sumRows1 = 0;
    for (let c = 0; c < matrix1.length; c++) {
        sumRows1 += Number(matrix1[0][c]);
    }

    let sumCols1 = 0;
    for (let i = 0; i < matrix1.length; i++) {
        sumCols1 += Number(matrix1[i][0]);
    }

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix1.length; col++) {
            sumRow = sumRow + Number(matrix1[col][row]);
        }
        if(sumRow != sumRows1){
            equalRows = 0;
        }
        sumRow = 0;
    }

    for (let row1 = 0; row1 < equalCols.length; row1++) {
        for (let col1 = 0; col1 < equalCols.length; col1++) {
            sumCol = sumCol + Number(matrix1[col1][row1]);
        }
        if(sumCol != sumCols1){
            equalCols = 0;
        }
        sumCol = 0;
    }

    if(equalCols == equalRows){
        console.log("true");
    }else{
        console.log("false");
    }
}


magicMatr(['1 0 0',
    '0 0 1',
    '0 1 0']
);
