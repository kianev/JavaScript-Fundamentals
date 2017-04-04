function smallestTwo(arr) {
    arr.sort((a,b) => a - b);
    let result = arr.slice(0,2);
    console.log(result.join(" "));
}
smallestTwo(['3', '0', '10', '4', '7', '3']);
