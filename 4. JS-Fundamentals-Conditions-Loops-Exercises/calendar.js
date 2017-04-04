function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

     let today = new Date(year, month - 1, day);
     let firstDay = new Date(year, month - 1, 1);// 1 за първия ден от месеца, 0 отива на последния ден от пред. мес.

     let firstDateOfCal = new Date(firstDay);
     firstDateOfCal.setDate(firstDateOfCal.getDate() - firstDateOfCal.getDay());

     let lastDayOfCal = new Date(firstDay);
     lastDayOfCal.setMonth(lastDayOfCal.getMonth() + 1);
     lastDayOfCal.setDate(0);
    lastDayOfCal.setDate(lastDayOfCal.getDate() + 6 - lastDayOfCal.getDay());

    let html = "<table>\n";
    html += "  <tr class='header'><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";

    for (let i = firstDateOfCal; i <= lastDayOfCal; i.setDate(i.getDate() + 1)) {
         if(i.getDay() == 0){
             html += "  <tr>";
         }
         if(i.getFullYear() < firstDay.getFullYear() ||
             (i.getMonth() < firstDay.getMonth() && i.getFullYear() == firstDay.getFullYear())){
             html += `<td class="prev-month">${i.getDate()}</td>`;

         }else if(i.getFullYear() > firstDay.getFullYear() ||
             (i.getMonth() > firstDay.getMonth()) && i.getFullYear() == firstDay.getFullYear()) {
             html += `<td class="next-month">${i.getDate()}</td>`;

         }else if(i.getTime() == today.getTime()){
             html += `<td class="today">${i.getDate()}</td>`;

         }else {
             html += `<td>${i.getDate()}</td>`;
         }

        if(i.getDay() == 6){
            html += "</tr>\n";
        }
    }

    html += "</table>";
    return html;
 }

