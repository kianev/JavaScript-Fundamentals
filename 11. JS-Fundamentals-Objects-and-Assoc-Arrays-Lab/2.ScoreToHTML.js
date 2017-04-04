function scoreToHtml(scoreStr) {
    let scoreArr = JSON.parse(scoreStr);
    let html = '<table>\n';
    html += `  <tr><th>name</th><th>score</th></tr>\n`;
    for (let scoreData of scoreArr) {
        html += "  <tr>";
        html += `<td>${htmlEscape(scoreData["name"])}</td>`;
        html += `<td>${htmlEscape(scoreData["score"])}</td>`;
        html += "</tr>\n";
    }

    html += '</table>';
    return html;

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
console.log(scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));
