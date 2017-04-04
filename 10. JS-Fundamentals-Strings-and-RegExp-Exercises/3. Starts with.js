
function startsWith([string, substring]) {
    if(string.match(substring)){
        console.log("true");
    }else{
        console.log("false");
    }
}
startsWith(["Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta"]);