function equalNeigbors(matrixRows) {
    let matrix = matrixRows.map(row => row.split(" "));
    let neighborsVer = 0;
    let neighborsHor = 0;
    for (let row = 0; row < matrix.length - 1 ; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] == matrix[row + 1][col]){
                neighborsVer++;
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col + 1] == matrix[row][col]){
                neighborsHor++;
            }
        }
    }
    console.log(neighborsVer + neighborsHor);
}

equalNeigbors(['2 2 5 7 4',
                '4 0 5 3 4',
                '2 5 5 4 2',]
);
