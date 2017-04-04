function extractWords(sentences) {
    let wordPattern = /\b[a-zA-Z]+\b/g;
    let words = new Set();
    for (let sentence of sentences) {
        let matches = sentence.match(wordPattern);
        matches.forEach(x => words.add(x.toLowerCase()));
    }
    console.log([...words.values()].join(", "));
    console.log(Array.from(words.values()).join(", "));
}
extractWords([
    'JS devs use Node.js for server-side JS.',
    'JS devs use JS.',
    '-- JS for devs --']);

