let matrix = [
    ["0.0", "0.1", "0.2"],
    ["1.0", "1.1", "1.2"],
    ["2.0", "2.1", "2.2"]
];

//console.log(matrix.map(row => row.join(" ")).join("\n")); // отпечатване на матрица

let m = [
    [10,20,30],
    [-5,-10,-15]
];
for (let row in m) {
    //console.log(row);
    console.log(m[row].join(" "));
}

