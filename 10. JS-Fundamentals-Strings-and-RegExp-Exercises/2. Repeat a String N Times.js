function repeatStringN([string,count]) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += string;
    }
    console.log(result);
}
repeatStringN(["magic is real", "3"]);
