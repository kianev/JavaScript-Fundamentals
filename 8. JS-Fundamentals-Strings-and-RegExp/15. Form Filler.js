
function formFiller(input) {
    let [username, email, phone] = [input.shift(), input.shift(), input.shift()];
    input.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    })
}

formFiller(['pit', 'pit@pit.com', '032746','I am <!user!>, my email is <@email@>, my phone is <+p+>.']);