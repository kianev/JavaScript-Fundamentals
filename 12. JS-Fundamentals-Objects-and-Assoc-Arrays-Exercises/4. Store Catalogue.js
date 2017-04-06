function storeCatalogue(input) {
    let catalog = new Map ();
    for (let i = 0; i < input.length; i++) {
        let firstLetter = input[i].charAt(0);
        let productInfo = input[i].split(" : ");
        let product = productInfo[0];
        let price = Number(productInfo[1]);

        if(!catalog.has(firstLetter)){
            catalog.set(firstLetter, new Map());
        }
        if(!catalog.get(firstLetter).has(product)){
            catalog.get(firstLetter).set(product,price);
        }
    }

    function sorting(a,b) {
        a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    }

    let sortedCatalog = [...catalog].sort();

    for (let [key,value] of sortedCatalog) {
        console.log(key);
        let sortedProducts = [...value].sort();
        for (let [product, price] of sortedProducts) {
            console.log("  " + product + ": " + price);
        }
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
