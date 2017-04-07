function systemComponets(input) {
     let elements = new Map();
    for (let i = 0; i < input.length; i++) {
        let [system, component, subcomponent] = input[i].split(" | ");
        if(!elements.has(system)){
            elements.set(system, new Map());
        }
        if(!elements.get(system).has(component)){
            elements.get(system).set(component, subcomponent);
        }
    }
    console.log(elements);
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