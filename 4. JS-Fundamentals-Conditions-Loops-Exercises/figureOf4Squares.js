function figureOf4Squares([n]) {
    n = Number(n);
    let row = "";
    let spaces = n - 2;
    for (let i = 1; i <= 2; i++) {
        console.log(row = "+" + "-".repeat(spaces) + "+" + "-".repeat(spaces) + "+");
        for (let j = 1; j < (n / 2) - 1; j++) {
            console.log(row = "|" + " ".repeat(spaces) + "|" + " ".repeat(spaces) + "|");
        }
    }
    console.log(row = "+" + "-".repeat(spaces) + "+" + "-".repeat(spaces) + "+");
}
figureOf4Squares([7]);
