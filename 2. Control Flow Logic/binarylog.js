function binary(nums) {
    for (let x of nums) {
        console.log(Math.log2(x))
    }
}
binary(["1024","256"]);