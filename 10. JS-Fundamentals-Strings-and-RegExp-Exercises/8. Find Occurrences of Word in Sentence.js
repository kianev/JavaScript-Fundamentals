function occur(input) {
    let text = input[0];
    let word = input[1];
    let regex = new RegExp("\\b" + word + "\\b", "gi");
    let count = 0;
    let match = regex.exec(text);
    while (match){
        count++;
        match = regex.exec(text);
    }
    console.log(count);
}
occur(["The waterfall was so high, that the child couldn’t see its peak.", "the"]);

