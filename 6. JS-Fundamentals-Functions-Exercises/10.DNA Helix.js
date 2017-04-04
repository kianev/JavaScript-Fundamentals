function dnaHelix(input) {
    let sequense = "ATCGTTAGGG";
    let rows = Number(input[0]);
    let currentIndex = 0;

    for (let i = 0; i < rows; i++) {
        let currentrow = i % 4;
        if(currentrow == 0){
            console.log(`**${sequense[currentIndex++ % sequense.length]}${sequense[currentIndex++ % sequense.length]}**`);
        }else if(currentrow == 1 || currentrow == 3){
            console.log(`*${sequense[currentIndex++ % sequense.length]}--${sequense[currentIndex++ % sequense.length]}*`);
        }else{
            console.log(`${sequense[currentIndex++ % sequense.length]}----${sequense[currentIndex++ % sequense.length]}`);
        }
    }
}

dnaHelix(["10"]);
