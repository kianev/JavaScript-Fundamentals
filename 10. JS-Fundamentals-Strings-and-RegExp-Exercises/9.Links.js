function extractLinks(input) {
    let result = [];
    let pattern = /([w]+){3,}(\.)([a-zA-Z0-9\-]+\.)(([a-z]+)\.){0,}([a-z]+)/g
    for (let i = 0; i < input.length; i++) {
        let match = input[i].match(pattern);
        if(match){
            console.log(match[0]);
        }
    }
}
extractLinks(["Join WebStars now for free, at www.web-stars.com",
"You can also support our partners:",
    "Internet - www.internet.com",
"WebSpiders - www.webspiders101.com",
"Sentinel - www.sentinel.-ko"
]);
