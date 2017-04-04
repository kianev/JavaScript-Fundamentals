function fancy(s, i) {
    return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && fancy(s, ++i);
}

function standard(str) {
    return str == str.split('').reverse().join('');
}

function kiss(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}

function isPalindrome([str]) {
    let lenght = Math.floor(str.length / 2);
    for (let i = 0; i < lenght; i++)
        if (str[i] != str[str.length - i - 1])
            return false;
    return true;
}

function clockTime(fn) {
    var dt = new Date();
    var max = 1000000;
    for (var i = 0; i < max; i++) {
        fn('racecar');
    }
    return Date.now() - dt.getTime();
}


console.log({
    'fancy one': clockTime(fancy),
    'standard answer': clockTime(standard),
    'keeping it simple': clockTime(kiss),
    'my function': clockTime(isPalindrome)
});

