function evenPosition(arr) {
    arr = arr.filter((x,i) => i % 2 == 0).join(" ");
    return arr;
}

function evenPosition1(arr) {
    let result = [];
    for (let i in arr) {
     if(i % 2 == 0) {
         result.push(arr[i]);
     }
    }
    console.log(result.join(" "));
}
evenPosition1([20, 30, 40]);