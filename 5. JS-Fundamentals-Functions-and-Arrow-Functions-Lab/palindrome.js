function isPalindrome([str]) {
    for (let i = 0; i < str.length / 2; i++)
        if (str[i] != str[str.length - i - 1]) {
            console.log("false");
            break;
        } else {
            console.log("true");
            break;
        }
}

isPalindrome(["raceacar"]);
