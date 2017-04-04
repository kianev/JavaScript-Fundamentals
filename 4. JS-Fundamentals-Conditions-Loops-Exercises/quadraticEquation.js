function quadraticEquation([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    let dscr = Math.pow(b,2) - (4 * a *c);
    if(dscr > 0){
        console.log((-b - Math.sqrt(dscr))/(2 * a));
        console.log((-b + Math.sqrt(dscr))/(2 * a));
    }else if(dscr == 0){
        console.log(-b / (2 * a));
    }else{
        console.log("No")
    }
}
quadraticEquation([5,2,1]);
