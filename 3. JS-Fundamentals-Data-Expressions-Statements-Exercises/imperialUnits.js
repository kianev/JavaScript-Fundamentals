function imperialUnits([inches]) {
    let feet = Math.floor(inches / 12);
    let inchesResidual = Math.round((inches / 12 - feet) * 12);
    console.log(feet + "'-" + inchesResidual + '"');

}
imperialUnits([36]);
