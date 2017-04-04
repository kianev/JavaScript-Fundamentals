let score = new Map();
score.set("Peter", 220);
score.set("Maria", 100);
score.set("Pesho",300);
let count = 0;
for (let [k,v] of score) {
    count++;
    console.log(k + " - " + v);
}
console.log(count);
console.log(Array.from(score.keys()).length);
console.log(Array.from(score.keys()).sort());

console.log(score.has("Maria"));
console.log(score.get("Maria"));
console.log(score.keys());
