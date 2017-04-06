function cappyJuice(input) {
    let juices = new Map();
    let bottles = new Map();
    for (let i = 0; i < input.length; i++) {
        let fruitInfo = input[i].split(" => ");
        let fruit = fruitInfo[0];
        let quantity = Number(fruitInfo[1]);

        if(!juices.has(fruit)){
            juices.set(fruit,0);
        }
        juices.set(fruit,juices.get(fruit) + quantity);

        if(juices.get(fruit) >= 1000){
            bottles.set(fruit, Math.floor(juices.get(fruit) / 1000));
        }
    }
    for (let [key, value] of bottles) {
        console.log(key + " => " + value);
    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
