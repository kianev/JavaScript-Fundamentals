function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    let lastElement = 0;
    for (let i = 0; i < rotations; i++) {
        lastElement = arr[arr.length - 1];
        arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(" "));
}

rotateArray(["Banana","Orange","Coconut","Apple",15]);
