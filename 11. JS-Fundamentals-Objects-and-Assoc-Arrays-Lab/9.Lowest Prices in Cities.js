function lowestPrices(data) {
    let townProducts = new Map();
    for (let dataTown of data) {
        let [town, product, price] = dataTown.split(/\s*\|\s*/);
        if(!townProducts.has(product)){
            townProducts.set(product,new Map());
        }
        townProducts.get(product).set(Number(price),town);
    }
    for (let [product, towns] of townProducts) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = "";
        for (let [price, town] of towns) {
            if(price < minPrice){
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

function findLowestPricedProducts(input) {
    let products = new Map;
    for (let priceList of input) {
        let [town, product, price] = priceList.split(/\s+\|\s+/g);
        if (!products.has(product))
            products.set(product, new Map);
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';
        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}
findLowestPricedProducts([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);