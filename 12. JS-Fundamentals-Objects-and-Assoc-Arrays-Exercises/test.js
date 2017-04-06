
let procucts = new Map();
procucts.set("Z", "Fridge1");
procucts.set("A", "Appricot");
procucts.set("F", "Fridge");

function alphabeticalSorting(a,b) {
    a[0].localeCompare(b[0]);
}
let sortedProducts = [...procucts].sort();
console.log(sortedProducts);