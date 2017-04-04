function extractText(str) {
    if(Array.isArray(str)) str = str[0];
    let result = [];
    let rigthPar = -1;
    while (true){
        let leftPar = str.indexOf("(", rigthPar + 1);
        if(leftPar == -1){
            break;
        }
        rigthPar= str.indexOf(")",leftPar + 1);
        if(rigthPar == -1) {
            break;
        }
           let textInside = str.substring(leftPar + 1,rigthPar);
           result.push(textInside);
        }
        return result.join(", ");
}

let end = extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
console.log(end);

function extractTextFromParenthesis([text]) {
    let result = [];
    let startIndex = text.indexOf('(');
    while (startIndex > -1) {
        let endIndex = text.indexOf(')', startIndex);
        if (endIndex == -1)
            break;
        let snippet = text.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = text.indexOf('(', endIndex);
    }
    //console.log(result.join(', '));
}

extractTextFromParenthesis(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
