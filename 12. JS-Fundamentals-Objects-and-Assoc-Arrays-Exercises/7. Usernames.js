function usernames(input) {
    let usernames = new Set();
    for (let username of input) {
        usernames.add(username);
    }
    let usernameArray = [...usernames];


    function arrange(a,b) {
        if(a.length != b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
    usernameArray = usernameArray.sort(arrange);
    for (let username of usernameArray) {
        console.log(username);
    }
}
usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);