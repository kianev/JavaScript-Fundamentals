
function splitString([string, delimiter]) {
    let elements = string.split(delimiter);
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i]);
    }
}
splitString(["http://platform.softuni.bg" , "."]);