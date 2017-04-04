let capitals = ["Sofia", "Berlin", "Moscow"];
for (let cap in capitals) {
    //console.log(cap);
}

capitals[10] = "Paris";
for (let cap1 of capitals) {
    console.log(cap1);
}