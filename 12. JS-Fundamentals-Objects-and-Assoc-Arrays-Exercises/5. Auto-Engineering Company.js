function carCompany(input) {
    let carProduced = new Map();
    for (let i = 0; i < input.length; i++) {
        let [carBrand, carModel, quantity] = input[i].split(" | ");
        quantity = Number(quantity);

        if(!carProduced.has(carBrand)){
            carProduced.set(carBrand, new Map());
        }
        if(carProduced.get(carBrand).has(carModel)){
            let newQuantity = carProduced.get(carBrand).get(carModel) + quantity;
            carProduced.get(carBrand).set(carModel, newQuantity);
        }else{
            carProduced.get(carBrand).set(carModel, quantity);
        }

    }
    for (let [carBrands, modelQuantity] of carProduced) {
        console.log(carBrands);
        for (let [model, quantity] of modelQuantity) {
            console.log("###" + model + " -> " + quantity);
        }
    }
}
carCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
    'Audi | Q7 | 1']);