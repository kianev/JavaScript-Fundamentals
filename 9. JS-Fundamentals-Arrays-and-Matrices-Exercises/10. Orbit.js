function orbit(input) {
    let dimensions = input[0].split(' ').map(Number);
    let rowsCount = dimensions[0];
    let colsCount = dimensions[1];

    let star = input[1].split(' ').map(Number);
    let starRow = star[0];
    let starCol = star[1];

    let matrix = [];
    for(let i=0; i<rowsCount; i++) {
        matrix[i] = [];
        for(let j=0; j<colsCount; j++) {
            matrix[i][j] = undefined;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col]=Math.max(Math.abs(starRow - row), Math.abs(starCol-col)) + 1;
        }
    }

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
    printMatrix(matrix);
}

//alternative solution

function orbitOfMatrix([size,coordinates]){
    [size,coordinates] = [size,coordinates].map(item=> item.split(' ').map(Number));
    let matrix = [];
    //fill matrix with zeroes
    for(let i=0;i<size[0];i++) {
        let rs = [];
        for(let j=0;j<size[1];j++) {
            rs.push(0);
        }
        matrix.push(rs);
    }
    let number = 2;
    let colEnd = coordinates[1];
    let rowEnd = coordinates[0];
    let colStart = coordinates[1];
    let rowStart = coordinates[0];
    matrix[coordinates[0]][coordinates[1]] = 1;
    let counterRowEnd = rowEnd;
    let counterColEnd = colEnd;
    let counterRowStart = rowEnd;
    let counterColStart = colEnd;
    while(true)
    {
        counterRowEnd++;
        counterColEnd++;
        counterRowStart--;
        counterColStart--;
        //check if out of matrix size
        if(counterRowEnd > size[0]-1 && counterColEnd > size[1]-1 && counterRowStart < 0 && counterColStart < 0)break;
        if(rowEnd >= size[0]-1) rowEnd = size[0]-1;
        else rowEnd++;
        if(colEnd >= size[1]-1) colEnd = size[1]-1;
        else colEnd++;
        if(rowStart == 0) rowStart = 0;
        else rowStart--;
        if(colStart == 0) colStart = 0;
        else colStart--;
        for (let i = rowStart; i <= rowEnd; i++) {
            for (let j = colStart; j <= colEnd; j++) {
                if(matrix[i][j] == 0){matrix[i][j] = number;}
            }
        }
        number++;
    }
    for(let row of matrix){
        console.log(row.join(' '));
    }
}

orbitOfMatrix(["5 5",
    "2 2"]);


