function cookingNumbers(input){
    let num = input[0];
    for (let i = 1; i < input.length; i++) {
        if(input[i] == "chop"){
            num = num / 2;
        }
        if(input[i] == "dice"){
            num = Math.sqrt(num);
        }
        if(input[i] == "spice"){
            num = num + 1;
        }
        if(input[i] == "bake"){
            num = num * 3;
        }
        if(input[i] == "fillet"){
            num = num - num * 0.2;
        }
        console.log(num);
    }
}

cookingNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);
