function townToJSON(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, name, lat, lng] = town.split(/\s*\|\s*/);
        let townsObj = {
            Town: name,
            Latitude: Number(lat),
            Longitude: Number(lng)
        };
        townsArr.push(townsObj);
    }
      return JSON.stringify(townsArr);
}
console.log(townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
