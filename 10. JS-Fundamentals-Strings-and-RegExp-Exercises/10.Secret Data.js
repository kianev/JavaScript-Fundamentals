function secretData(input) {
    let pattern = /\*[A-Z][a-zA-Z]*(?=\s|$)|\+[0-9-]{10}(?=\s|$)|![0-9a-zA-Z]+(?=\s|$)|_[0-9a-zA-Z]+(?=\s|$)/g;
    for (let line of input) {
        console.log(line.replace(pattern, m => "|".repeat(m.length)));
    }
}

secretData(["Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
    "Agent *Ivankov had to act quick in order.",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about 'finishing work' with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",
    "This is all I saw, that night.",
    "I cannot explain it myself..."]);


function secretData1(input) {
    let pattern = /\*[A-Z][a-zA-Z]+(?=\s|$)|\+[0-9-]{10}(?=\s|$)|![0-9a-zA-Z]+(?=\s|$)|_[0-9a-zA-Z]+(?=\s|$)/g;
    for (let i = 0; i < input.length; i++) {
        let match = input[i].match(pattern);
        if(match){
            match = input[i].match(pattern);
            while (match) {
                let replaced = "|".repeat(match[0].length);
                input[i] = input[i].replace(match[0], replaced);
                match = input[i].match(pattern);
            }
           // console.log(input[i]);
        }else{
           // console.log(input[i]);
        }
    }
}

secretData1(["Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
        "Agent *Ivankov had to act quick in order.",
       "He picked up his phone and called some unknown number.",
        "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about 'finishing work' with subject !2491a23BVB34Q and returning to Base _Aurora21",
"Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",
"This is all I saw, that night.",
    "I cannot explain it myself..."]);