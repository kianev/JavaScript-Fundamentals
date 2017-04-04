function rectangleOfStars(count = 5)  {
    for (let i = 1; i <= count; i++) {
        console.log("*" + " *".repeat(count - 1));
    }
}

function squareOfStars(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count-1));
    }
    for (let i=1; i<=n; i++)
        printStars();
}
rectangleOfStars(5);