function heroicInventory(input) {
    let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let currentHeroArguments = input[i].split(" / ");
        let heroName = currentHeroArguments[0];
        let heroLevel = Number(currentHeroArguments[1]);
        let heroItems = [];
        if(currentHeroArguments.length > 2){
            heroItems = currentHeroArguments[2].split(", ");
        }
        let heroObj = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };
        heroData.push(heroObj);
    }
    console.log(JSON.stringify(heroData));
}
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);