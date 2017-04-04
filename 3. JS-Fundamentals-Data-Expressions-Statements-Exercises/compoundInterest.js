function compInterest([sum, rate, periodM, timeY]) {
    [sum, rate, periodM, timeY] = [sum, rate, periodM, timeY].map(Number);
    let period = 12 / periodM;
    let futureValue = sum * (Math.pow(1 + (((rate / 100) / period)), (period * timeY)));
    console.log(Math.round(futureValue * 100) / 100);

}
compInterest([1500, 4.3, 3, 6]);