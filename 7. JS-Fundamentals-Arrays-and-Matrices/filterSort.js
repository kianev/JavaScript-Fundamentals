let nums = [20,40,10,30,5,100];
let filtered = nums.filter(x => x % 10 == 0).filter(x => x < 50);
console.log(filtered);

let filtered1 = nums.filter(x => x % 10 == 0).filter(x => x < 50).map(x => "числото " + (100 * x));
//console.log(filtered1);

let sorted = nums.sort((a,b) => a - b);
console.log(sorted);

