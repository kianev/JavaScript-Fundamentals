function printStars(count = 5) {
    console.log("*".repeat(count));
}

function multiply(a,b) {
    return a * b;
}
let m = multiply(4,4);


function hello(){
    console.log("hello");
}
//let v = hello();
//console.log(v);

function check(a) {
    if (a > 0)
        return "positive";
    if (a < 0)
        return "negative";
}

console.log(check(0));