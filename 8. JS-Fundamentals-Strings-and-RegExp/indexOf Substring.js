let s = "I like JS and I am happy with JS";
console.log(s.indexOf("JS"));
console.log(s.substring(7,9));//startIndex, endIndex
console.log(s.substr(7,2));//startIndex, length
console.log(s.substr(-7,4));//startIndex from behind, length

console.log(s.replace(/JS/g,"C#"));//regular expression "global", replaces all JS

let s1 = "I    like     JS";
console.log(s1.split(" "));
console.log(s1.split(" ").filter(s1 => s1 != ""));