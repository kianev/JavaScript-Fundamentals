/*function captureNumbers(input) {
    let pattern = /\d+/g;
    let nums = [];
    for (let i = 0; i < input.length; i++) {
        let num = input[i].match(pattern);
        if(num){
            for (let j = 0; j < num.length; j++) {
                nums.push(num[j]);
            }
        }
    }
console.log(nums.join(" "));
}
captureNumbers(["The300","What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);

function capNumbers(input) {
    let numbers = [];
    let pattern = /\d+/g;
    let text = "";
    for (let i = 0; i < input.length; i++) {
        let currString = input[i];
        text += currString;
    }
    let match = pattern.exec(text);
    while (match){
        numbers.push(match[0]);
        match = pattern.exec(text);
    }
    console.log(numbers.join(" "));
}

capNumbers(["The300","What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);*/

function capNumbersShort(input) {
    let text = input.join(" ");
    let regex = /\d+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(" "));
}

capNumbersShort(["The300","What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);