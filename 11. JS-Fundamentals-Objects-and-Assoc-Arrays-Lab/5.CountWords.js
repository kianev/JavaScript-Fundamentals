function countWords(lines) {
    let text = lines.join("\n");
    let words = text.split(/[^A-Za-z0-9_]+/g).filter(w => w != "");
    let countWords = {};
    for (let word of words) {
   countWords[word] ? countWords[word]++ : countWords[word] = 1;
    }
    console.log(JSON.stringify(countWords));
}
countWords(["JS devs use Node.js for server-side JS.-- JS for devs"]);
