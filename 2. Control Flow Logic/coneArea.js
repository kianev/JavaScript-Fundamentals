function coneArea([r, h]) {
    [r, h] = [r, h].map(Number);
    let volume = Math.PI * r * r * (h / 3);
    let area = Math.PI * r * (r + (Math.sqrt(h * h + r * r)));
    console.log("volume = " + volume);
    console.log("area = " + area);
}
coneArea([3.3, 7.8]);