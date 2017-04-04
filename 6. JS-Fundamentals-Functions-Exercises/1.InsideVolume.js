
function checkPoint(input){
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if(inVolume(x,y,z)){
            console.log("inside");
        }else{
            console.log("outside");
        }
    }
    function inVolume(x,y,z){
        let x1 = 10, x2 = 50;
        let y1 = 15, y2 = 80;
        let z1 = 20, z2 = 50;

        if(x >= 10 && x <= 50){
            if(y >= 15 && y <= 80){
                if(z >= 20 && z <= 50){
                    return true;
                }
            }
        }
        return false;
    }
}

checkPoint([8,20,22]);

