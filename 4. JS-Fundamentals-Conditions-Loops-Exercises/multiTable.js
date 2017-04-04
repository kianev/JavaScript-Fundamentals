function multiTable([n]){
   n = Number(n);
   let html = "";
   html += "<table border='1'>\n";
   html += "\t<tr><th>x</th>";
    for (let c = 1; c <= n; c++) {
        html += `<th>${c}</th>`
    }
        html += "</tr>\n";

    for (let i = 1; i <= n; i++) {
        html += `\t<tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
           html += `<td>${i * j}</td>`;
       }
        html += "</tr>\n";
    }
    html += "</table>\n";

    return html;
}
//multiTable([5]);