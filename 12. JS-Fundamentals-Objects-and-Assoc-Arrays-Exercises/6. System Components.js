function systemComponets(input) {
     let elements = new Map();
    for (let i = 0; i < input.length; i++) {
        let [system, component, subcomponent] = input[i].split(" | ");
        if(!elements.has(system)){
            elements.set(system, {});
        }
        if(!elements.get(system).hasOwnProperty(component)){
            elements.get(system)[component] = [];
        }
        elements.get(system)[component].push(subcomponent);
    }


    function arrange(a,b) {
        if(Object.keys(elements.get(a)).length === Object.keys(elements.get(b)).length){
            if(a > b) return 1;
            if(a < b) return -1;
        }else{
            return Object.keys(elements.get(a)).length < Object.keys(elements.get(b)).length;
        }
    }
   //console.log(elements);
    let sortedSystemKeys = [...elements.keys()].sort(arrange);
    for (let systemKeys of sortedSystemKeys) {
       console.log(systemKeys);

        let system = elements.get(systemKeys);
        let componentKeys = Object.keys(system);

        let sortedComponentKeys = componentKeys.sort((a,b) => system[a].length < system[b].length);
        for (let componentKey of sortedComponentKeys) {
            console.log("|||" + componentKey);
            for (let subComponent of system[componentKey]) {
                console.log("||||||" + subComponent);
            }
        }
    }
}
systemComponets([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);