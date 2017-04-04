function negativePositive(arr) {
    arr = arr.map(Number);
    let result = [];
    for (let num of arr) {
        if(num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    return result;
}
negativePositive(['3', '-2', '0', '-1']);
