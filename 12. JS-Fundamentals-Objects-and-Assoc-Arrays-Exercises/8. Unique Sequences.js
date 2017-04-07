function uniqueSequences(input) {
    let sequences = new Map;

        for (let line of input) {
            let sequenceSorted = JSON.parse(line).map(Number).sort((a,b) => b - a);
            let temp =  `[${sequenceSorted.join(', ').toString()}]`;
            if(!sequences.has(temp)){
                sequences.set(temp,sequenceSorted.length);
            }
    }
    let sorting = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...sequences.keys()].sort((a,b) => sorting(a,b,sequences)).join("\n"));
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
