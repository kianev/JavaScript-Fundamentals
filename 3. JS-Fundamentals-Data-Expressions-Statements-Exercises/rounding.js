function rounding([a,b]) {
    [a,b] = [a,b].map(Number);
    if(b > 15){
        b = 15;
    }
    console.log(Number(a.toFixed(b)));
}
rounding([10.57576576576576687687687, 20]);