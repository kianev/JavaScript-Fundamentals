function diagonalSums(matrixRows) {
    let matrix = matrixRows.map(row => row.split(" ").map(Number));
    let mainSum = 0,  secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondSum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + " " + secondSum);
}

diagonalSums(['3 5 17',
    '-1 7 14',
    '1 -8 89']
);