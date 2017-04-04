function usernames(inputEmails) {
    let result = [];
    for (let email of inputEmails) {
        let [alias, domain] = email.split("@");//Destructuring in JS
        let username = alias + ".";
        let domainParts = domain.split(".");
        domainParts.forEach(p => username += p[0]);
        result.push(username);
    }
    console.log(result.join(", "));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
