function calculator([a,b,operator]){
    [a,b] =  [a,b].map(Number);
    let calc = function (a,b,operator) {return operator(a,b)};
    let add = function (a,b) {return a + b};
    let substract = function (a,b) {return a - b};
    let multi = function (a,b) {return a * b};
    let div = function (a,b) {return a / b};

    switch (operator){
        case "+": return calc(a,b, add);
        case "-": return calc(a,b, substract);
        case "*": return calc(a,b, multi);
        case "/": return calc(a,b, div);
    }
}
console.log(calculator(['18', '-1', '*']));
