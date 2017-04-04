function cityMarkets(sales) {
   let townProducts = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if(!townProducts.has(town))
            townProducts.set(town, new Map());
        let income = quantity * price;
        let oldIncome = townProducts.get(town).get(product);
        if(oldIncome) income += oldIncome;
        townProducts.get(town).set(product,income);
    }
    for (let town of townProducts.keys()) {
        console.log("Town - " + town);
        for (let product of townProducts.get(town).keys()) {
            console.log("$$$" + product + " : " + townProducts.get(town).get(product));
        }
    }
}
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000    ',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);
