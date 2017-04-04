
function expressionSplit(input) {
    let expression = input[0];
    let elements = expression.split(/[\s.();,]+/);
    console.log(elements.join(" "));
}
expressionSplit(['let sum = 4 * 4,b = "wow";']);