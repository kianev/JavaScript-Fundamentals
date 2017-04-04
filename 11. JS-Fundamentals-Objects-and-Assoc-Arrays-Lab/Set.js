let s = new Set();
s.add("Pesho");
s.add(5);
//s.delete(5)
//console.log(s.entries());
//console.log(s.values());

let names = new Set();
names.add("Peter"); names.add(20);
names.add("Maria"); names.add(15);
console.log(names.has("Peter"));
for (let name of names) {
    console.log(name);
}
