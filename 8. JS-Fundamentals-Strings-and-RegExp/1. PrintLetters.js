function printLetters(str) {
    if(Array.isArray(str))
        str = str[0];
    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}] -> ${str[i]}`);
    }
}

function printLetters1(str) {
    if(Array.isArray(str))
        str = str[0];
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`);
    }

}
printLetters1('Hello, World!');