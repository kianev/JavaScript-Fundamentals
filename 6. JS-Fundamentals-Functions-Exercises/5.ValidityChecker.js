function validityChecker([x1,y1,x2,y2]) {
    [x1,y1,x2,y2] = [x1,y1,x2,y2].map(Number);
    let firstPairToZero = Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2));
    let secondPairToZero = Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2));
    let betweenPoints = Math.sqrt(Math.pow(Math.abs(x1 - x2),2) + Math.pow(Math.abs(y1 - y2),2));
    if(Number.isInteger(firstPairToZero)){
        console.log("{" + x1 +", " + y1 + "} to {0, 0} is valid");
    }else{
        console.log("{" + x1 +", " + y1 + "} to {0, 0} is invalid");
    }
    if(Number.isInteger(secondPairToZero)){
        console.log("{" + x2 +", " + y2 + "} to {0, 0} is valid");
    }else{
        console.log("{" + x2 +", " + y2 + "} to {0, 0} is invalid");
    }
    if(Number.isInteger(betweenPoints)){
        console.log("{" + x1 +", " + y1 + "} to " + "{" + x2 +", " + y2 + "} is valid");
    }else{
        console.log("{" + x1 +", " + y1 + "} to " + "{" + x2 +", " + y2 + "} is invalid");
    }
}
validityChecker(['2','1','1','1']);