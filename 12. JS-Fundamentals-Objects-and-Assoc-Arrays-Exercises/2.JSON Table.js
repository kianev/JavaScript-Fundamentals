function jsonTable(input) {

    let html = "<table>\n";
    for (let line of input) {
        html += "\t<tr>\n";
        let item = JSON.parse(line);
        for (let key in item) {
           if (item.hasOwnProperty(key))
                html += `\t\t<td>${htmlEscape(item[key])}</td>\n`;
        }
        html += "\t<tr>\n";
    }

    html += "</table>";
    return html;

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
//jsonTable('[{"name":"Pesho","position":"Promenliva","salary":100000},{"name":"Teo","position":"Lecturer","salary":1000},{"name":"Georgi","position":"Lecturer","salary":1000}]');
jsonTable(["{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}","{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}","{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}"]);