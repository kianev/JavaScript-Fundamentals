let obj = {name: "Pesho", age: 13};
obj.sum = function (x,y) {return x + y};

let sofia =
    {
        name: "Sofia",
        lat: 42.696552,
        long: 23.326011
    };
if(sofia.lat == undefined){
    //console.log("Key age does not exist");
}else{
    //console.log("Key exist");
}
let json = JSON.stringify(obj);
let obj2 = JSON.parse(json);
console.log(json);
