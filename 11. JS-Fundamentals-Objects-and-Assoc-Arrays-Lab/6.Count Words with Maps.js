function countWordsMap(input) {
    let text = input.join("\n").toLowerCase().split(/[^A-Za-z0-9_]+/g).filter(w => w != "");
    let wordCount = new Map();
    for (let w of text) {
        wordCount.has(w) ? wordCount.set(w, wordCount.get(w) + 1) : wordCount.set(w,1);
    }
    let allWords = Array.from(wordCount.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${wordCount.get(w)} times`));
}
countWordsMap(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);
