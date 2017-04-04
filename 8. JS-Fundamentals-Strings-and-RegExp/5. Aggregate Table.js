function aggregateTable(table) {
    let sum = 0, towns = [];
    for (let line of table) {
        let townData = line.split("|");
        townName = townData[1].trim();
        income = Number(townData[2].trim());
        towns.push(townName);
        sum += income;
    }
    console.log(towns.join(", "));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);
