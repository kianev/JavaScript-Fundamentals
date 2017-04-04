function findNames([text]) {
    let result = [];
    let pattern = /\b_([a-zA-Z0-9]+)\b/g;
    let regex = new RegExp(pattern, "g");
    let match = regex.exec(text);
    while (match){
        result.push(match[1]);
        match = regex.exec(text);
    }
    console.log(result.join(","));
}

findNames(["The _id and _age variables are both integers."]);
