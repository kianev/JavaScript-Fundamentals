function concat(arr) {
    let allStrings = arr.join("");
    let chars = Array.from(allStrings);
    let reversed = chars.reverse();
    let revString = reversed.join("");
    console.log(revString);
}
concat(['I', 'am', 'student']);
