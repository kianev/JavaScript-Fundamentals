function printAsList(items) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    console.log("<ul>");
    for (let item of items) {
        console.log("<li>" + item.htmlEscape() + "</li>")
    }
    console.log("</ul>");


}

printAsList(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);