
function biggestElement(matrixRows) {
    let matrix = matrixRows.map(row => row.split(" ").map(Number));
    let biggest = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach(
        c => biggest = Math.max(biggest,c)
    ));
    console.log(matrix);
}


biggestElement(['3 5 7 12',
    '-1 4 33 2',
    '8 3 0 4']
);