function templateQuiz(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
       html += '\t<question>\n\t' + '\t' + input[i] + '\n'+ '\t</question>\n\t<answer>\n' + '\t\t' +
           input[i + 1] + '\n\t</answer>\n';
    }
    html += '</quiz>';
    return html;
}

templateQuiz(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);