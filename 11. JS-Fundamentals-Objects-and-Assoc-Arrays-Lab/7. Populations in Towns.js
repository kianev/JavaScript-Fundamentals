function populationInTowns(input) {
    let total = new Map();
    for (let dataTowns of input) {
        let [town, population] = dataTowns.split(/\s*<->\s*/g);
        population = Number(population);
        if(total.has(town)){
            total.set(town, total.get(town) + population);
        }else{
            total.set(town,population);
        }
    }
    for (let [town, sum] of total) {
        console.log(town + " : " + sum);
    }
}
populationInTowns([
   'Varna <-> 40000',
   'Sofia <-> 1200000',
   'Plovdiv <-> 20000',
   'Sofia <-> 100000',
   'Varna <-> 420000',
   'Plovdiv <-> 400000',
   'Plovdiv <-> 50000']);