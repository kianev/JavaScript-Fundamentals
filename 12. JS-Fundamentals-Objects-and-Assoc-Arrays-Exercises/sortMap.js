let a = new Map();
a.set("thiiiiird","thiiiird");
a.set("second", "second");
a.set("first", "first");
console.log([...a]);
console.log([...a].sort((a,b)=>a[0].length - b[0].length));
//console.log([...a].sort(compare));//Same result as above

function compare(a,b) {
   let result = a[1].length - b[1].length;
   if(result == 0){
       result = a[1].localeCompare(b[1]);
   }
   return result;
}