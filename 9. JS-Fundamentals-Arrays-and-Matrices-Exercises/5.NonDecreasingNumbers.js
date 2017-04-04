function nonDecreasing(arr) {
    let biggestNumber = Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= biggestNumber){
            console.log(arr[i]);
            biggestNumber = Number(arr[i]);
        }
    }
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
