function areaPerimeter([a,b]) {
    a = Number(a);
    b = Number(b);
    let area = a * b;
    let perimeter = 2 * (a + b);
    console.log(area);
    console.log(perimeter);
}

areaPerimeter([1,3]);