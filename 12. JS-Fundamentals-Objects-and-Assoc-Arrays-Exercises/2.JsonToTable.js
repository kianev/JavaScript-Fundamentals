function jsonToTable(input) {
    let data = JSON.parse(input);

    let html = "<table>\n";

    for (let line of data) {
        html += "\t<tr>\n";
        for (let key in line) {
            if(line.hasOwnProperty(key))
            html += `\t\t<tr>${htmlEscape(line[key])}</tr>\n`
        }
        html += "\t</tr>\n";
    }

    html += "</table>";
    console.log(html);

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
jsonToTable(['[{"name":"Pesho","position":"Promenliva","salary":100000},{"name":"Teo","position":"Lecturer","salary":1000},{"name":"Georgi","position":"Lecturer","salary":1000}]']);
