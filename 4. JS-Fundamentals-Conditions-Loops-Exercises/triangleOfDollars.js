function triangleOfDollars(n) {
 let rows = Number(n);
 let line = "";
    for (let cols = 1; cols <= rows; cols++) {
        line += "$";
        console.log(line);
    }
}
triangleOfDollars(3);
